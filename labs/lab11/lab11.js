const express = require('express');
const app = express();       

app.set('view engine','ejs');
app.set('views','views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

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
                  