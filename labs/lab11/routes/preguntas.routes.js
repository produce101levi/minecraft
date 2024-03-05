const express = require('express');
const router = express.Router();



router.get('/preguntas', (request, response, next) => {
    response.render('preguntas');
});

router.post('/preguntas', (request, response, next) => {
    console.log(request.body);
    
})

module.exports = router;