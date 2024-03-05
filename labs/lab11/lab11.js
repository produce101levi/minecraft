const express = require('express');
const app = express();       

app.set('view engine','ejs');
app.set('views','views');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasPreguntas = require('./routes/preguntas.routes');

app.use('/', rutasPreguntas);



app.get('/', (request, response, next) => {
  response.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>
              Página de Leví
          </title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="/">
                  <img src="https://1000logos.net/wp-content/uploads/2017/03/Font-Levis-Logo.jpg" width="112" height="28">
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item" href="/">
                    Home
                  </a>
            
                  <a class="navbar-item" href="/preguntas">
                    Preguntas
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Letras
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item" href="/letras_D">
                        Delicate
                      </a>
                      <a class="navbar-item" href="/letras_7R">
                        7 Rings
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-danger">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          <div class="box m-6">
              <h1 class="title">Mi página</h1>
          <figure class="image is-3by1">
              <img src="https://pbs.twimg.com/media/FrSzFTGXwAYRXNM.jpg:large">
            </figure>
            <section id="biografia">
                    <br><h2 class="subtitle"><strong>Bienvenido a mi página.</strong></h2>
                    <p>
                        A continuación hablaré un poco sobre mi.<br>
                        Hasta el momento no tengo mucha experiencia en el área de ingeniería de
                        tecnología computacionales, pero espero poder aprender bastante con el tiempo
                        y la experiencia que adquiera de ésta clase.<br>Tengo 19 años, el 20 de marzo
                        de 2024 cumplo los 20. Nací en Veracruz pero vengo de Aguascalientes, donde
                        viví 6 años de mi vida.<br>Me apasiona mucho el baile, estoy en repre y actualmente
                        estoy trabajando en mi proyecto más grande relacionado a la fecha con el mismo;
                        el vibrart.<br>Me gustan mucho las canciones de <a href="https://en.wikipedia.org/wiki/Taylor_Swift">Taylor Swift</a>, K-Pop y cualquier
                        canción en general que vea que se puede bailar. Me gusta mucho sentir la música
                        y expresarla por medio de mis movimientos.
                    </p><br>
                </section>
                <section id="canciones">
                    <h2 class="subtitle">¿Qué canciones me gustan?</h2>
                    <p>Cardigan - Taylor Swift<br>Cruel Summer - Taylor Swift<br>
                    7 rings - Ariana Grande<br>Fearless - Taylor Swift</p><br>
                </section>
                <div class="columns">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://i.guim.co.uk/img/media/ed2056d394c44283a81e9de95fd8541378435846/0_0_3150_3149/master/3150.jpg?width=700&quality=85&auto=format&fit=max&s=0bc44906d55052f2a64892afa328ea8c">
                          </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://i.scdn.co/image/ab67616d00001e0256ac7b86e090f307e218e9c8">
                          </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://upload.wikimedia.org/wikipedia/en/3/33/Twice_-_Feel_Special.png">
                          </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://m.media-amazon.com/images/I/81yxawVFwSL._UF1000,1000_QL80_.jpg">
                          </figure>
                    </div>
                  </div>
                  <footer>
<br>
<em>You drew stars around my scars and now I'm bleeding...</em><br>
Emilio Leví Díaz Abarde<br>
A01620887<br>
A01620887@TEC.MX<br>
Visual Studio Code <br>
https://github.com/produce101levi/minecraft
</footer>
</div>

</body>

</html>`);

});

app.use((request, response, next) => {
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

app.listen(3000);
                  