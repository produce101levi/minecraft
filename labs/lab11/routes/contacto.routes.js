const express = require('express');
const router = express.Router();

router.get('/contacto', (request, response, next) => {
    response.render('contacto');
})

router.post('/contacto', (request, response, next) => {
    console.log(request.body);
    
})


module.exports = router;