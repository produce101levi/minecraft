const express = require('express');
const app = express();       

app.set('view engine','ejs');
app.set('views','views');

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 


app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasUsuarios = require('./routes/usuario.routes');
app.use('/user', rutasUsuarios);

const rutasPreguntas = require('./routes/preguntas.routes');
app.use('/', rutasPreguntas);

const rutasLetras = require('./routes/letras.routes');
app.use('/', rutasLetras);

const rutasContacto = require('./routes/contacto.routes');
app.use('/', rutasContacto);

const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

app.get('/', (request, response, next) => {
  response.send(``);

});


app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

app.listen(3000);
                  