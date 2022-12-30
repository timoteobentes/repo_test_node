// Dependencias
const express = require('express');
const app = express();

// Chamando o arquivo de conexão com banco de dados
const database = require("./config/database");
database.sync();

app.use(express.json());

// rotas
const user = require('./routes/users.routes');
app.use("/", user);


// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Conectado com sucesso na porta ${PORT}`));