export default function handler(_req, res) {
  res.status(200).json({
    success: true,
    message: "API do portfolio funcionando."
  });
}
