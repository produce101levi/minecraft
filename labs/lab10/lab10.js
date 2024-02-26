const http = require ('http');
const filesystem = require ('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if (request.url == "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write(`<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Laboratorio 4</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                <link rel="stylesheet" type="text/css" href="lab6.css">
            </head>
            <body>
                <section class="section">
                    <div class="container">
                        <h1 class="title">
                            Laboratorio 4
                        </h1>
                    </div>
                </section>
        
                <div id='hiddenSection' class='container'></div>
                
                <script src="lab4.js"></script>
            </body>
        </html>`);
        response.end();
    }
});

server.listen(5000);