import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import contactRoutes from "./routes/contactRoutes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const clientDistPath = path.resolve(currentDir, "../../client/dist");
const clientIndexPath = path.join(clientDistPath, "index.html");

app.use(cors());
app.use(express.json());

function sendHealthCheck(_req, res) {
  res.json({
    success: true,
    message: "API do portfolio funcionando."
  });
}

app.get("/api/health", sendHealthCheck);
app.use("/api/contact", contactRoutes);

if (fs.existsSync(clientIndexPath)) {
  app.use(express.static(clientDistPath));

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      next();
      return;
    }

    res.sendFile(clientIndexPath);
  });
} else {
  app.get("/", sendHealthCheck);
}

app.use(notFound);
app.use(errorHandler);

export default app;
