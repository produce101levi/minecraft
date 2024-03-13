const express = require('express');
const router = express.Router();

const letrasController = require('../controllers/letras.controller');


router.post('/letras_D', (request, response, next) => {
    console.log(request.body);
    
})

router.post('/letras_7R', (request, response, next) => {
    console.log(request.body);
    
})

router.get('/letras_D', letrasController.get_letras_D);
router.get('/letras_7R', letrasController.get_letras_7R);

module.exports = router;