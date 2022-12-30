const Sequelize = require('sequelize');
const db = require('../config/database');

const User_personagem = db.define('user_personagem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    personagemID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Personagem',
            key: 'id'
        }
    }
});

module.exports = User_personagem;