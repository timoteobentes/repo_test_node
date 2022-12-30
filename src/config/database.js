const Sequelise = require('sequelize');

const sequelize = new Sequelise("nodeFelipe", "root", "Timoteo@24", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(function() {
        console.log("Conectado com sucesso!!");
    })
    .catch(function() {
        console.log("Erro: Falha ao conectar...");
    });

module.exports = sequelize;
