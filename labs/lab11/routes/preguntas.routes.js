const express = require('express');
const router = express.Router();
const isAuth = require('../util/is_auth');

const preguntasController = require('../controllers/preguntas.controller');

router.post('/preguntas', (request, response, next) => {
    console.log(request.body);
    
})

router.get('/lista_preguntas', isAuth, preguntasController.get_preguntas);
router.post('/lista_preguntas', isAuth, preguntasController.post_preguntas);
router.get('/preguntas', isAuth, preguntasController.get_questions);
router.get('/:pregunta_id', isAuth, preguntasController.get_root);
router.get('/', isAuth, preguntasController.get_root);


module.exports = router;