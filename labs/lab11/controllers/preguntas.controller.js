const Pregunta = require('../models/preguntas.model');

exports.get_preguntas = (request, response, next) => {
    response.render('lista_preguntas', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    }); 
};

exports.get_questions = (request, response, next) => {
    response.render('preguntas', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    }); 
};

exports.post_preguntas = (request, response, next) => {
  console.log(request.body);
  const pregunta = new Pregunta(request.body.question, request.body.answer);
  pregunta.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 
                'ultima_pregunta=' + request.body.question + '; HttpOnly');
            response.redirect('/');
        })
        .catch((error) => {console.log(error)});
    };

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_pregunta = request.get('Cookie');
    if (ultima_pregunta) {
        ultima_pregunta = ultima_pregunta.split('=')[1];
    } else {
        ultima_pregunta = '';
    }
    console.log(ultima_pregunta);
    
    Pregunta.fetch(request.params.preguntas_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('lista_preguntas', {
            preguntas: rows,
            ultima_pregunta: ultima_pregunta,
            username: request.session.username || '',
        });
    })

    .catch((error) => {
        console.log(error);
    });

}
