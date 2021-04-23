import express from "express";

const app = express();

app.use(express.json());

app.post("/users", (reques, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
});

app.listen(3000, () => console.log("Server rodando!"));
