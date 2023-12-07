import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const porta: number = 3006;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.get("/", (req: Request, res: Response) => {
    const objt = {
        nome : "Kaua",
        idade: 19,
        sobrenome: "Rameh"
    }
    res.send(objt);
});

app.post("/user", (req: Request, res: Response) => {
    const {name} = req.body;

    const greeting = `Oi ${name}, você está no meu servidor!`
    res.json(greeting)
})