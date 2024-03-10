const http = require('http');


const server = http.createServer((request, response) => {
    console.log(request.url);


    if (request.url === "/"){
        
        const content = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>
                    Página de Leví
                </title>
                <style>body{margin:0 auto;max-width:55em;font-family:sans-serif;line-height:1.5;padding:4em 1em;color:#474242}h2{margin-top:.5em;padding-top:.5em}h2,strong{color:#600089}a{color:#d79be7}#canciones,h1{color:#2e054d}footer{color:#0d0015}.protocolo{color:#80bfda}.dominio{color:#8083da}.class,.ejemplo,.ruta{color:#a280da}.parametros{color:#cb80da}.ancla{color:#da80c7}
                </style>
            </head>
            <body>
                <h1>Mi página</h1>
                <img src="https://i.pinimg.com/564x/22/5c/b5/225cb554c1dcda6efce28d9501d6f966.jpg" alt="NYC">
                <section id="biografia">
                    <h2>Bienvenido a mi página.</h2>
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
                    </p>
                </section>
                <section id="canciones">
                    <h2>¿Qué canciones me gustan?</h2>
                    <p><strong>Cardigan</strong> - Taylor Swift<br>
                    <strong>Cruel Summer</strong> - Taylor Swift<br>
                    <strong>7 rings</strong> - Ariana Grande<br>
                    <strong>Fearless</strong> - Taylor Swift</p>
                </section>
                <img src="https://i.pinimg.com/564x/e1/e8/d4/e1e8d4114b6cd321303e5ba0e7455424.jpg" alt="Taylor Swift">
                <section id="Preguntas">
                    <h2>Preguntas</h2>
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
                    procesarla con éxito.<br>
                    <strong>¿Es responsabilidad del desarrollador corregir un sitio web si un 
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
                    <button id="boton" type="button">Siiii!!</button><br>
                </section>
                <section>
                    <p>
                        El uso de !important es un último recurso, para poder invalidar adicionales
                        elementos en la hoja CSS. Como ingeniero, mi recomendación es utilizarlo
                        únicamente cuando no haya otras opciones disponibles, ya que su utilización 
                        puede traer complicaciones al código y hacer que el proceso de debugging sea
                        complicado.
                    </p>
                    <p>
                        Deben de elegirse imágenes de fondo de manera sabia para el HTML, por
                        varias razones. Una imagen con un tamaño grande puede provocar que el
                        tiempo de carga sea excesivo, por ejemplo. Además, la imagen debe 
                        tener un contraste con los demás elementos para no distraer
                        al usuario.
                    </p>
                    <p>
                        La utilización del porcentaje para definir un tamaño es buena al momento
                        de crear un diseño responsivo. Puedes decir que el ancho de un elemento
                        sea 50% para que tome la mitad del espacio, por ejemplo. Es conveniente 
                        cuando es necesario que el elemento tenga un tamaño relativo al espacio.
                        <br>Los píxeles son mejor utilizados en los tamaños de fuente, márgenes
                        y los rellenos. Asimismo, sirven para definir un tamaño más preciso.<br>
                        Por último, los puntos se utilizan más comúnmente en la impresión 
                        de los tamaños de fuente en la web. Sin embargo, es mucho más común 
                        y preferible utilizar píxeles.
                    </p>
                    <p>
                        Siempre es bueno minimizar el .css para que el archivo/sitio web pueda
                        cargar más rápido y dar respuestas más rápidas y eficientes al usuario.
                    </p>
                </section>
                <section>
                    <label for="text">Escríbenos unas palabras</label>
                    <input id="text" type="text">
                    <button>Gracias!</button>
                </section>
                <footer>
                    <br>
                    <em>You drew stars around my scars and now I'm bleeding..</em>.<br>
                    Emilio Leví Díaz Abarde<br>
                    A01620887<br>
                    A01620887@TEC.MX<br>
                    Visual Studio Code <br>
                    https://github.com/produce101levi/minecraft
                </footer>

            </body>
        
        </html>`;

        response.setHeader('Content-Type', 'text/html');
        response.write(content);
        response.end();
    }
});

server.listen(5500);