//const { response } = require("express");
const express = require("express");
const app = express();

// indica para expresss que usaremos o JSON
app.use(express.json());

let usuarios = [
    {nome: "Diego", sobrenome:"Oliveira"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send("Teste 1");
})

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    // console.log(request);
    return response.json(usuarios);
})

app.post("/usuarios", (request, response) => {
    const { nome, sobrenome } = request.body;

    usuarios.push({ nome, sobrenome });

    return response.json({ nome, sobrenome });
})

app.put("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;

    const { sobrenome } = request.body;
})

app.listen(3000, () => {
        console.log("Servidor Online, Porta 3000");
})