const express = require('express');
const router = express.Router();

const preguntasController = require('../controllers/preguntas.controller');

router.get('/preguntas', (request, response, next) => {
    response.render('preguntas');
})

router.post('/preguntas', (request, response, next) => {
    console.log(request.body);
    
})

router.get('/lista_preguntas', preguntasController.get_preguntas);
router.post('/lista_preguntas', preguntasController.post_preguntas);
router.get('/', preguntasController.get_root);


module.exports = router;