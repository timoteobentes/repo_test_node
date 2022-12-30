const User = require('../models/Users');

module.exports = {
    async createUser(req, res) {
        const result = await User.create({
            name: "Maria",
            email: "maria@gmail.com",
            senha: "13456"
        })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário cadastrado com sucesso!"
            });
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não cadastrado!"
            })
        });
        console.log(result)
    }
}