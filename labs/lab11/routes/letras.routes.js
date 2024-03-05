const express = require('express');
const router = express.Router();



router.get('/letras_D', (request, response, next) => {
    response.render('letras_D');
})

router.post('/letras_D', (request, response, next) => {
    console.log(request.body);
    
})

router.get('/letras_7R', (request, response, next) => {
    response.render('letras_7R');
})

router.post('/letras_7R', (request, response, next) => {
    console.log(request.body);
    
})


module.exports = router;