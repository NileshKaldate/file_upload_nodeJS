import express from "express";
import { errorHandler } from "./middleware/error-middleware.js";
import { Routes } from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use("/", Routes);
app.use(errorHandler);

export default app;
