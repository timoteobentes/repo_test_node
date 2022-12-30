const Sequelize = require('sequelize');
const db = require('../config/database');

const Perfil = db.define('perfil', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Perfil;