const UserController = require('../models/UserModel') ;
exports.criarUsuario = (req, res) => {
    const {nome, email} = req.body;
    const usuario = new UserController(nome, email);

    res.json({
        mensagem: "Usuário criado com sucesso!", usuario
    });
};