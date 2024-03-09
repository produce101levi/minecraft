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
    
    fs.readFile('questions.txt', 'utf8', (err, data) => {
        if (err) throw err;

        const listaPreguntas = data.split('\n');
        
        response.render('lista_preguntas', {questions: listaPreguntas});
    })
  };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('preguntas');
}