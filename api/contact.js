import { handleContactMessage } from "../server/src/services/contactService.js";

async function readBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body || "{}");
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");

  return rawBody ? JSON.parse(rawBody) : {};
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      message: "Metodo nao permitido."
    });
    return;
  }

  try {
    const result = await handleContactMessage(await readBody(req));

    res.status(200).json({
      success: true,
      message: result.message,
      data: result.data
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
      success: false,
      message: error.message || "Erro interno do servidor."
    });
  }
}
