const express = require('express');
const router = express.Router();
const userController= require('../controllers/UserController');

router.post('/usuarios', userController.criarUsuario);
module.exports = router;