const express = require ("express");
const app = express();

app.use(express.json());
// serve para aceitar a comunicação em json

const port = 3000;

const usuarioAmanda = {
    id: 1,
    nome: 'Amanda',
    idade: 32
};

const usuarios = [usuarioAmanda];

app.get('/usuarios', (req,res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});