import nodemailer from "nodemailer";
import { env } from "../config/env.js";

function createTransporter() {
  if (!env.emailHost || !env.emailUser || !env.emailPass || !env.emailFrom) {
    const error = new Error("Configuração de e-mail incompleta no servidor.");
    error.statusCode = 500;
    throw error;
  }

  return nodemailer.createTransport({
    host: env.emailHost,
    port: env.emailPort,
    secure: env.emailSecure,
    auth: {
      user: env.emailUser,
      pass: env.emailPass
    }
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function handleContactMessage(data) {
  const { name, email, message } = data ?? {};

  if (!name || !email || !message) {
    const error = new Error("Nome, e-mail e mensagem são obrigatórios.");
    error.statusCode = 400;
    throw error;
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    const error = new Error("Preencha todos os campos corretamente.");
    error.statusCode = 400;
    throw error;
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

  if (!isValidEmail) {
    const error = new Error("Digite um e-mail válido.");
    error.statusCode = 400;
    throw error;
  }

  const transporter = createTransporter();
  const safeName = escapeHtml(trimmedName);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br>");

  await transporter.sendMail({
    from: env.emailFrom,
    to: env.emailTo,
    replyTo: trimmedEmail,
    subject: `Nova mensagem do portfólio - ${trimmedName}`,
    text: [
      `Nome: ${trimmedName}`,
      `E-mail: ${trimmedEmail}`,
      "",
      "Mensagem:",
      trimmedMessage
    ].join("\n"),
    html: `
      <h2>Nova mensagem do portfólio</h2>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>E-mail:</strong> ${safeEmail}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${safeMessage}</p>
    `
  });

  return {
    message: "Mensagem enviada com sucesso.",
    data: {
      name: trimmedName,
      email: trimmedEmail
    }
  };
}
