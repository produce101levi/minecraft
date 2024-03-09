const fs = require('fs');

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas'); 
};

// exports.post_preguntas = (request, response, next) => {
//     fs.writeFile('file.txt', request.body.question);
//     preguntas.push(request.body.question);
//     response.redirect('/');
// };

exports.submitQuestion = (req, res, next) => {
    const question = req.body.question;
    fs.appendFile('questions.txt', `${question}\n`, (err) => {
      if (err) throw err;
      console.log('Pregunta enviada con éxito');
    });
    res.redirect('/preguntas');
  };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('preguntas');
}