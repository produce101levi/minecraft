const express = require('express');
const router = express.Router();

const controllerUsuarios = require('../controllers/usuarios.controller');

router.get('/login', controllerUsuarios.get_login);

module.exports = router;