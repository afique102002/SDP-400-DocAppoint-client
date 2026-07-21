import { betterAuth } from "better-auth";
import { Resolver } from "node:dns/promises";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined.");
}

let client;
let auth;
let connectionError = null;
let initializationPromise;

async function getMongoUri() {
  const uri = process.env.MONGODB_URI;

  // Atlas uses mongodb+srv URLs. Some local DNS resolvers reject SRV queries;
  // in that case resolve through the configured server and use a seed-list URI.
  if (!process.env.MONGODB_DNS_SERVER || !uri.startsWith("mongodb+srv://")) {
    return uri;
  }

  const parsedUri = new URL(uri);
  const resolver = new Resolver();
  resolver.setServers([process.env.MONGODB_DNS_SERVER]);

  const [srvRecords, txtRecords] = await Promise.all([
    resolver.resolveSrv(`_mongodb._tcp.${parsedUri.hostname}`),
    resolver.resolveTxt(parsedUri.hostname).catch(() => []),
  ]);
  const seedList = srvRecords.map(({ name, port }) => `${name}:${port}`).join(",");
  const options = new URLSearchParams(parsedUri.search);

  options.set("tls", "true");
  for (const record of txtRecords) {
    for (const [key, value] of new URLSearchParams(record.join(""))) {
      if (!options.has(key)) options.set(key, value);
    }
  }

  const credentials = parsedUri.username
    ? `${parsedUri.username}${parsedUri.password ? `:${parsedUri.password}` : ""}@`
    : "";

  return `mongodb://${credentials}${seedList}${parsedUri.pathname}?${options}`;
}

async function ensureInit() {
  if (initializationPromise) return initializationPromise;

  initializationPromise = (async () => {
    try {
      const mongoUri = await getMongoUri();
      client = new MongoClient(mongoUri, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 5000,
        connectTimeoutMS: 5000,
      });

      await client.connect();

      auth = betterAuth({
        baseURL: process.env.BETTER_AUTH_URL,
        database: mongodbAdapter(client.db("docAppoint"), { client }),
        emailAndPassword: { enabled: true },
        socialProviders: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        },
        session: {
          cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 7 * 24 * 60 * 60,
          },
        },
        plugins: [jwt()],
      });
    } catch (error) {
      connectionError = error;
      initializationPromise = undefined;
      throw error;
    }
  })();

  return initializationPromise;
}

export async function getAuth() {
  await ensureInit();
  return auth;
}

export { connectionError };
