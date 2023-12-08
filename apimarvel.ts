import express, { Request, Response } from "express";
import axios from "axios"

const app = express();

app.get("/", async (req: Request, res: Response) => {

    try {
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    
    res.json(response.data);
    
    } catch (error) {
    
    res.status(500).json({ error: "Erro ao obter dados da API." });
    
    }
    
    });

app.get("/", (req: Request, res: Response) => {

res.send("Bem-vindo ao meu servidor!");

});

const porta: number = 3000;

app.listen(porta, () => {

console.log(`Servidor rodando em http://localhost:${porta}`);

});