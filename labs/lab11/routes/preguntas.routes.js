const express = require('express');
const router = express.Router();
const preguntasController = 
    require('../controllers/preguntas.controller');



router.get('/preguntas', preguntasController.get_construir);

router.post('/preguntas', (request, response, next) => {
    console.log(request.body);
    
})

module.exports = router;