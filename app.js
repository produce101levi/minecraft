console.log("Hola mundo desde node");

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

//Escribe el string del segundo parámetro
//en el archivo indicado en el primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');


const arreglo = [10,500,60,30,6000];

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}