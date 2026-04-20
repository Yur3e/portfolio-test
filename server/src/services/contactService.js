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

  return {
    message: "Mensagem recebida com sucesso.",
    data: {
      name: trimmedName,
      email: trimmedEmail
    }
  };
}
