exports.get_preguntas = (request, response, next) => {
    response.render('preguntas'); 
};

exports.post_preguntas = (request, response, next) => {
    console.log(request.body.question);
    preguntas.push(request.body.question);
    response.redirect('/');
};
exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('preguntas', {
        construcciones: construcciones,
    });
}