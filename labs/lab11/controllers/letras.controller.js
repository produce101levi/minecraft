exports.get_letras_D = (request, response, next) => {
    response.render('letras_D' , {
        username: request.session.username || '' ,
    })
};

exports.get_letras_7R = (request, response, next) => {
    response.render('letras_7R' , {
        username: request.session.username || '' ,
    })
};