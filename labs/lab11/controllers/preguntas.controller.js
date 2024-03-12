const Pregunta = require('../models/preguntas.model');

exports.get_preguntas = (request, response, next) => {
    response.render('lista_preguntas'); 
};

exports.post_preguntas = (request, response, next) => {
  console.log(request.body);
  const pregunta = new Pregunta(request.body.question, request.body.answer);
  pregunta.save();
  response.setHeader('Set-Cookie', 'ultima_pregunta=' + request.body.question + '; HttpOnly');
  response.redirect('/');
}

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_pregunta = request.get('Cookie');
    if (ultima_pregunta) {
        ultima_pregunta = ultima_pregunta.split('=')[1];
    } else {
        ultima_pregunta = '';
    }
    console.log(ultima_pregunta);
    response.render('lista_preguntas', {
        preguntas: Pregunta.fetchAll(),
        ultima_pregunta: ultima_pregunta,
    });
}
