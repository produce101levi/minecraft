const Usuario = require('../models/usuario.model.js');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: false,
    });
};

exports.get_home = (request, response, next) => {
    response.render('home', {
        username: request.session.username || '',
    })
}

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username, request.body.password)
    .then(([rows, fieldData]) => {
        if(rows.length == 1) {
            request.session.username = request.body.username;
            response.redirect('/')
        } else {
            response.redirect('/user/login');
        }
    })
    .catch((error) => {console.log(error)});
}


exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/user/login');
    });

}

exports.get_signup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password);
    nuevo_usuario.save()
    .then(([rows, fieldData]) => {
        response.redirect('/user/login');
    })
    .catch((error) => {console.log(error);});
}
