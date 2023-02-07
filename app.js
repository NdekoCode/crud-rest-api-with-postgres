// import dotenv from "dotenv";
import express from "express";
import productRouter from "./routes/products.routes.js";
// dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRouter);

export default app;
