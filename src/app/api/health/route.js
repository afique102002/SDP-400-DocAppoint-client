export async function GET() {
  // Do not expose any secret values. Only return presence flags.
  const env = {
    MONGODB_URI: Boolean(process.env.MONGODB_URI),
    MONGODB_DNS_SERVER: Boolean(process.env.MONGODB_DNS_SERVER),
    BETTER_AUTH_URL: Boolean(process.env.BETTER_AUTH_URL),
    GOOGLE_CLIENT_ID: Boolean(process.env.GOOGLE_CLIENT_ID),
    GOOGLE_CLIENT_SECRET: Boolean(process.env.GOOGLE_CLIENT_SECRET),
  };

  return new Response(JSON.stringify({ ok: true, env }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
