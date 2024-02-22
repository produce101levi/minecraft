console.log("Hola mundo desde node");

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

//Escribe el string del segundo parámetro
//en el archivo indicado en el primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');