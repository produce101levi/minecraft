const express = require('express');
const app = express();



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasConstrucciones = require('./routes/construcciones.routes');

app.use('/',rutasConstrucciones);

app.use((request, response, next) => {
  console.log(request.body);
  response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);
                  