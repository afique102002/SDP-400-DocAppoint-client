import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

async function getHandler() {
	const auth = await getAuth();
	return toNextJsHandler(auth);
}

export async function GET(req, ctx) {
	const h = await getHandler();
	return h.GET(req, ctx);
}

export async function POST(req, ctx) {
	const h = await getHandler();
	return h.POST(req, ctx);
}

export async function PUT(req, ctx) {
	const h = await getHandler();
	return h.PUT ? h.PUT(req, ctx) : new Response(null, { status: 405 });
}

export async function DELETE(req, ctx) {
	const h = await getHandler();
	return h.DELETE ? h.DELETE(req, ctx) : new Response(null, { status: 405 });
}

export async function PATCH(req, ctx) {
	const h = await getHandler();
	return h.PATCH ? h.PATCH(req, ctx) : new Response(null, { status: 405 });
}

export async function OPTIONS(req, ctx) {
	const h = await getHandler();
	return h.OPTIONS ? h.OPTIONS(req, ctx) : new Response(null, { status: 204 });
}