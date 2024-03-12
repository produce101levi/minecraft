const Pregunta = require('../models/preguntas.model');

exports.get_preguntas = (request, response, next) => {
    response.render('lista_preguntas'); 
};

exports.post_preguntas = (request, response, next) => {
  console.log(request.body);
  const pregunta = new Pregunta(request.body.question, request.body.answer);
  pregunta.save();
  response.setHeader('Set-Cookie', 'ultima_pregunta=' + 'request.body.question');
  response.redirect('/');
}

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('lista_preguntas', {
        preguntas: Pregunta.fetchAll(),
    });
}
