const express = require('express');
const router = express.Router();

router.get('/about', (request, response, next) => {
    response.render('home');
})

router.post('/about', (request, response, next) => {
    console.log(request.body);
    
})


module.exports = router;