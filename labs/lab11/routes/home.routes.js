const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller')


router.post('/about', (request, response, next) => {
    console.log(request.body);
    
})

router.get('/about', usuarioController.get_home);

module.exports = router;