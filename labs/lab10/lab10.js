const http = require('http');
const filesystem = require('fs');

const footer = `<footer>
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

</html>`
const header = `<!DOCTYPE html>
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
          
                <a class="navbar-item">
                  Documentation
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
          </figure>`

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if (request.url == "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`<!DOCTYPE html>
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
                `);
        response.write(footer);
        response.end();
    } else if (request.url == "/preguntas" && request.method == "GET") {
      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(`
      
      <div class="box m-6">
        <figure class="image is-3by1">
            <img src="https://i.pinimg.com/originals/24/5c/a6/245ca640095317ecff88ac8b5a995621.jpg">
          </figure>
          <br><h1 class="title">Ingresar preguntas</h1>
          <form action="/preguntas" method="POST">
            <label class="label" for="question">Pregunta</label>
            <input name ="question" id="question" type="text" class="input"><br>
            <input class="button is-danger" type="submit" value="Construir">
          </form>
              <section id="Preguntas">
                  <br><h2 class="subtitle"><strong>Preguntas</strong></h2>
                  <strong>¿Cuál es la diferencia entre Internet y la World Wide Web?</strong><br>
                  El internet es la red de diferentes computadoras conectadas entre sí para
                  comunicar información, mientras que la world wide web es un sistema que
                  utiliza hipervínculos de acceso a diferentes páginas, así como a la navegación.<br>
                  <strong>Cuáles son las partes de un URL?</strong><br>
                  Un URL (Uniform Resource Location) se conforma normalmente de:<br>
                  <p class="protocolo">1. Un protocolo:</p> Indica cómo acceder al recurso. Ejemplos incluyen
                  http o https.<br>
                  <p class="dominio">2. Un dominio:</p> Dirección que identifica al recurso.<br>
                  <p class="ruta">3. Una ruta:</p> Ubicación exacta del recurso, por ejemplo, "/pagina/ejemplo".<br>
                  <p class="parametros">4. Parámetros:</p> Opcionalmente se pueden usar para dar información adicional
                  al servidor. Normalmente éstos se ven después de un signo interrogativo "?".<br>
                  <p class="ancla">5. Ancla:</p> Especifica una ubicación en la página web a la que se debe despalzar.<br>
                  <p><strong class="ejemplo">Ejemplo:</strong><br>
                  <small class="protocolo">https://</small><small class="dominio">www.levi.com</small><small class="ruta">/pagina/ejemplo/</small><small class="parametros">?id=143</small><small class="ancla">#leccion7</small></p>
                  <strong>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong><br>
                  1. Get: Solicitar datos del servidor y recuperar información como páginas web.<br>
                  2. Head: Solicitar sólo los encabezados de respuesta sin los cuerpos. Verificar encabezados.<br>
                  3. Post: Enviar datos al servidor para procesiarlos. Enviar formularios HTML, subir archivos o modificar datos.<br>
                  4. Put: Enviar datos al servidor para crear o actualizar un recurso en la ubicación específica.<br>
                  5. Patch: Enviar datos al servidor para modificar parcialmente un recurso sin necesidad de reenviarlo todo. <br>
                  6. Delete: Eliminar recursos del servidor, como archivos.<br>
                  <strong>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo 
                  cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong><br>
                  El método POST, ya que envía los datos al servidor de manera segura, 
                  protegiendo la privacidad del usuario. Permite enviar más información.<br>
                  <strong>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong><br>
                  Por defecto se usa el método GET.<br>
                  <strong>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? 
                  ¿Ocurrió algún error?</strong>
                  <br>Al contrario. Indica que ha sido exitosa la solicitud. El servidor pudo 
                  procesarla con éxito.<br><br>
                  <figure class="image is-3by1">
                      <img src="https://wimlds.org/wp-content/uploads/2019/09/NYC.jpg">
                    </figure>
                  <br><strong>¿Es responsabilidad del desarrollador corregir un sitio web si un 
                  usuario reporta que intentó acceder al sitio y se encontró con un error 404? 
                  ¿Por qué?</strong><br>
                  Sí es responsabilidad del desarrollador porque debe asegurarse de que todos los
                  sitios estén disponibles <em>a menos que</em> el sitio al que el usuario intentó
                  ingresar en verdad no exista. <br>
                  <strong>¿Es responsabilidad del desarrollador corregir un sitio web si un 
                  usuario reporta que intentó acceder al sitio y se encontró con un error 500? 
                  ¿Por qué?</strong><br>
                  Sí es responsabilidad del desarrollador porque con éste error se reporta que
                  ha ocurrido un error en el servidor que impide que se procese la solicitud
                  del usuario adecuadamente. En su mayor parte éstos errores vienen por parte
                  del mismo servidor, aunque en ocasiones puede ser solucionado si el usuario
                  refresca la págica. <br>
                  <strong>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado 
                  (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén 
                  desaprobados. 
                  </strong><br>
                  Significa que aunque aún funciona el atributo de HTML en los navegadores,
                  es obsoleto y es recomendado no usarlo en nuevos desrrollos. Ejemplos incluyen:<br>
                  font<br>center<br>strike<br>acronym<br>
                  <strong>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</strong> <br>
                  Las diferencias principales incluyen la estrucutra y semántica (HTML5 es un
                  lenguaje más semántico en lugar de que el desarrollador tenga que identificar divs),
                  multimedia (HTML5 ofrece soporte para audio y video a través de los elementos
                  sin necesidad de utilizar terceros como Flash), gráficos y animaciones (en HTML5 
                  se pueden integrar éstos elementos utilizando JavaScript en lugar de plugins externos
                  como en HTML4), compatibilidad con dispositivos móviles, etc. <br>
                  <strong>¿Qué componentes de estructura y estilo tiene una tabla?</strong> <br>
                  table, tr, th, td, thead, tbody, tfoot, border, border-collapse,
                  border-spacing, width, height, background-color, text-align,
                  vertical-align, font-family. <br>
                  <strong>¿Cuáles son los principales controles de una forma HTML5?</strong> <br>
                  input, textarea, select, button, label, fieldset, legend, datalist, progress, meter, input type. <br>
                  <strong>Cuánto apoyo HTML5 tiene Google Chrome?</strong> <br>
                  Google Chrome apoya HTML5 en su totalidad.
                  <br><strong>¿Cuál es el ciclo de vida de los sistemas de información?</strong><br>
                  Planificación, análisis, diseño, desarrollo, implementación, operación y mantenimiento, desactivación.<br>
                  <strong>¿Cuál es el ciclo de desarrollo de sistemas de información?</strong><br>
                  Identifiación de problemas, estudio de viabilidad, análisis de requisitos,
                  diseño de sistemas, implementación de sistema, implementación y despliegue, 
                  operación y mantemiento, evaluación y mejora continua, desactivación.
              </section>
              <section>
                  <br><button class="button is-danger" onclick="alert('Gracias por visitar mi página <3')">Siiii!!</button><br><br>
              </section>
              <div class="columns">
                  <div class="column">
                      <figure class="image is-sqaure">
                          <img src="https://image.tensorartassets.com/posts/images/650443986611290600/7b36ddc4-8018-4123-a36c-566008b4df29.jpg">
                      </figure>
                  </div>
                  <div class="column">
                      <figure class="image is-sqaure">
                          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/40/c8/8f/40c88f1b-c187-c8b5-b04f-658e0e21d561/source/256x256bb.jpg">
                      </figure>
                  </div>
                  <div class="column">
                      <figure class="image is-sqaure">
                          <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple111/v4/af/7d/6a/af7d6aa5-e8dd-b1a0-14ad-12026c51d561/source/256x256bb.jpg">
                      </figure>
                  </div>
                  <div class="column">
                      <figure class="image is-sqaure">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvTa2qHZuOzOajJI9t566Kp-Nq4j2bsRw4A&usqp=CAU">
                      </figure>
                  </div>
              </div>
              <section>
                  <div class="card">
                      <div class="card-content">
                        <div class="content">
                          <em>Material Design</em> es un lenguaje de diseño hecho por
                          Google, introducido en 2014. Utiliza lay-outs de cuadrícula, 
                          animaciones y transiciones, y efectos como sombras en sus
                          elementos. La interfaz moderna es apoyada por éstos elementos,
                          así como sus colores vibrantes y fuentes características.
                        </div>
                      </div>
                    </div>
              </section>
              `);
        response.write(footer);
        response.end();
        
    } else if (request.url == "/preguntas" && request.method == "POST") {
      const datos = [];
      request.on('data', (dato) => {
          console.log(dato);
          datos.push(dato);
      });
      return request.on('end', () => {
          const datos_completos = Buffer.concat(datos).toString();
          console.log(datos_completos);
          const question = datos_completos.split('&')[0].split('=')[1];
          console.log(question);
          filesystem.writeFileSync('question.txt', question);
          return response.end();
      });

     } else if(request.url=="/letras_D"){
      response.write(header);
      response.write(`
      <div class="box m-6">
            <h1 class="title">Delicate</h1>
      <section>
        <p> 
        This ain't for the best
        <br>My reputation's never been worse, so
        <br>You must like me for me
        <br>We can't make
        <br>Any promises now, can we, babe?
        <br>But you can make me a drink

        <br><br>Dive bar on the East Side, where you at?
        <br>Phone lights up my nightstand in the black
        <br>Come here, you can meet me in the back
        <br>Dark jeans and your Nikes, look at you
        <br>Oh damn, never seen that color blue
        <br>Just think of the fun things we could do

        <br><br>'Cause I like you
        <br>This ain't for the best
        <br>My reputation's never been worse, so
        <br>You must like me for me
        <br>Yeah, I want you
        <br>We can't make
        <br>Any promises now, can we, babe?
        <br>But you can make me a drink

        <br>Is it cool that I said all that?
        <br>Is it chill that you're in my head?
        <br>'Cause I know that it's delicate (delicate)
        <br>Is it cool that I said all that?
        <br>Is it too soon to do this yet?
        <br>'Cause I know that it's delicate
        <br>Isn't it? Isn't it? Isn't it?
        <br>Isn't it?
        <br>Isn't it? Isn't it? Isn't it?
        <br>Isn't it?
        <br>Delicate

        <br><br>Third floor on the West Side, me and you
        <br>Handsome, you're a mansion with a view
        <br>Do the girls back home touch you like I do?
        <br>Long night, with your hands up in my hair
        <br>Echoes of your footsteps on the stairs
        <br>Stay here, honey, I don't wanna share

        <br><br>'Cause I like you
        <br>This ain't for the best
        <br>My reputation's never been worse, so
        <br>You must like me for me
        <br>Yeah, I want you
        <br>We can't make
        <br>Any promises now, can we, babe?
        <br>But you can make me a drink

        <br>Is it cool that I said all that?
        <br>Is it chill that you're in my head?
        <br>'Cause I know that it's delicate (delicate)
        <br>Is it cool that I said all that?
        <br>Is it too soon to do this yet?
        <br>'Cause I know that it's delicate
        <br>Isn't it? Isn't it? Isn't it?
        <br>Isn't it?
        <br>Isn't it? Isn't it? Isn't it?
        <br>Isn't it?
        <br>Delicate

        <br>
        <br>
        Sometimes I wonder when you sleep
        <br>Are you ever dreaming of me?
        <br>Sometimes when I look into your eyes
        <br>I pretend you're mine, all the damn time
        <br>'Cause I like you

        <br>Is it cool that I said all that?
        <br>Is it chill that you're in my head?
        <br>'Cause I know that it's delicate (delicate)
        <br>Yeah, I want you
        <br>Is it cool that I said all that?
        <br>Is it too soon to do this yet?
        <br>'Cause I know that it's delicate (delicate)
        <br>'Cause I like you
        <br>Is it cool that I said all that?
        <br>Isn't it? Isn't it? Isn't it? Isn't it?
        <br>Is it chill that you're in my head?
        <br>Isn't it? Isn't it? Isn't it? Isn't it?
        <br>'Cause I know that it's delicate
        <br>Isn't it? Isn't it? Isn't it? Isn't it?
        <br>(Yeah, I want you)
        <br>Is it cool that I said all that?
        <br>Isn't it? Isn't it? Isn't it? Isn't it?
        <br>Is it too soon to do this yet?
        <br>Isn't it? Isn't it? Isn't it?
        <br>'Cause I know that it's delicate
        <br>(Isn't it?)
        <br>Delicate
        </p>
      </section>`)
      
      response.write(footer);
    } else if (request.url == "/letras_7R"){
      response.write(header);
      response.write(`<div class="box m-6">
      <h1 class="title">7 Rings</h1>
      <section>
        <p> 
        <br>Yeah
        <br>Breakfast at Tiffany's and bottles of bubbles
        <br>Girls with tattoos who like getting in trouble
        <br>Lashes and diamonds, ATM machines
        <br>Buy myself all of my favorite things

        <br><br>Yeah
        <br>Been through some bad shit, I should be a sad bitch
        <br>Who would have thought it'd turn me to a savage?
        <br>Rather be tied up with calls and not strings
        <br>Write my own checks like I write what I sing, yeah (Yeah)

        <br><br>My wrist, stop watchin'
        <br>My neck is flossy
        <br>Make big deposits
        <br>My gloss is poppin'

        <br><br>You like my hair?
        <br>Gee, thanks! Just bought it
        <br>I see it, I like it
        <br>I want it, I got it
        <br>Yeah

        <br><br>I want it, I got it
        <br>I want it, I got it
        <br>I want it, I got it
        <br>I want it, I got it

        <br><br>You like my hair?
        <br>Gee, thanks! Just bought it
        <br>I see it, I like it
        <br>I want it, I got it
        <br>(Yep)

        <br><br>Wearin' a ring but ain't gon' be no "Mrs."
        <br>Bought matching diamonds for six of my bitches
        <br>I'd rather spoil all my friends with my riches
        <br>Think retail therapy my new addiction

        <br><br>Whoever said money can't solve your problems
        <br>Must not have had enough money to solve 'em
        <br>They say, "Which one?" I say, "Nah, I want all of 'em"
        <br>Happiness is the same price as "red-bottoms"

        <br><br>My smile is beamin' (yeah)
        <br>My skin is gleamin' (is gleamin')
        <br>The way it shine
        <br>I know you've seen it
        <br>You've seen it

        <br><br>I bought a crib
        <br>Just for just for the closet closet
        <br>Both his and hers
        <br>I want it, I got it
        <br>Yeah

        <br><br>I want it, I got it
        <br>I want it, I got it
        <br>I want it, I got it
        <br>I want it, I got it
        <br>Baby

        <br><br>You like my hair?
        <br>Gee, thanks! Just bought it
        <br>Oh, yeah
        <br>I see it, I like it
        <br>I want it, I got it
        <br>Yep

        <br><br>Yeah, my receipts be lookin' like phone numbers
        <br>If it ain't money, then wrong number
        <br>Black Card is my business card
        <br>The way it be settin' the tone for me

        <br><br>I don't mean to brag
        <br>But I be like, "Put it in the bag"
        <br>Yeah
        <br>When you see them racks
        <br>They stacked up like my ass
        <br>Yeah

        <br><br>Shoot
        <br>Go from the store to the booth
        <br>Make it all back in one loop
        <br>Gimme the loot
        <br>Never mind, I got the juice
        <br>Nothin' but net when we shoot

        <br><br>Look at my neck
        <br>Look at my jet
        <br>Ain't got enough money to pay me respect
        <br>Ain't no budget when I'm on the set
        <br>If I like it then that's what I get
        <br>Yeah

        <br><br>I want it, I got it
        <br>I want it, I got it
        <br>(Oh yeah)
        <br>Yeah
        <br>I want it, I got it
        <br>I want it, I got it
        <br>Oh, yeah, yeah

        <br><br>You like my hair?
        <br>Gee, thanks! Just bought it
        <br>I see it, I like it
        <br>I want it, I got it
        <br> (I see, yep)
        </p>
        </section>`)
        response.write(footer);
    }
    else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(`<!DOCTYPE html>
      <div class="box m-6">
                <section id="error">
                  <br><h2 class="title">Oh no!</h2>
                  <p>No se ha podido encontrar el sitio que buscas. Por favor vuelve a intentarlo,
                  o asegúrate de que esté correcto el URL.</p>
                </section>
                </div>
                
            </body>
        
        </html>`);
        response.end();
    }
});

server.listen(3000);