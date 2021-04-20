const express = require("express");
const app = express();

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

app.listen(3000, () => {
        console.log("Servidor Online, Porta 3000");
})