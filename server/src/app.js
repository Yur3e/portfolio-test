import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "API do portfólio funcionando."
  });
});

app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
