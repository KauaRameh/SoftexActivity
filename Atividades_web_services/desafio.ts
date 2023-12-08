import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const porta: number = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao meu servidor!");
});