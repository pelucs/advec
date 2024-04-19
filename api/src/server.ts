import express from "express";
import { routes } from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config

const PORT: number = process.env.PORT ?
    Number(process.env.PORT) :
    3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen({
    host: '0.0.0.0',
    port: PORT
}, () => console.log(`Servidor rodando na porta ${PORT}! Eita glória 🔥`));
