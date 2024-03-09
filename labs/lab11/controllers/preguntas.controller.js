const fs = require('fs');

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas'); 
};

exports.submitQuestion = (request, response, next) => {
    const question = request.body.question;
    fs.appendFile('questions.txt', `${question}\n`, (err) => {
      if (err) throw err;
      console.log('Pregunta enviada con éxito');
    });
    response.redirect('/preguntas');
  };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('preguntas');
}