const fs = require('fs');
//1
const arregloNum = [23, 43, 65, 100, 29];

const calcularPromedio = (array) => {
    let sum = 0;
    for (let i = 0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
  }

  const result = calcularPromedio(arregloNum);

  console.log(`El promedio es: ${result}`);

//2
function writeFile(text) {
  fs.writeFileSync('output.txt', text);
}

const msg = 'Hola mundo desde Node!';
writeFile(msg);

//3

//Triángulo
const size = 10;

for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}
