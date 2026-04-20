export default function notFound(_req, _res, next) {
  const error = new Error("Rota não encontrada.");
  error.statusCode = 404;
  next(error);
}
