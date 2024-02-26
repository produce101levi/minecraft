//Ejercicio 1

const ejercicioUno = (numero) => {
    document.write("<div class='container'>");
    document.write("<p class='subtitle'>Tabla de cuadrados y cubos</p>");
    document.write("<table class='table is-striped'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    
    for (let i = 1; i<=numero; i++){
        cuadrado = i * i;
        cubo = i * i * i;

        document.write(`<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`);
    }
    document.write("</table>");
    document.write("</div>");
}

const numGet = prompt("Ingrese un número");
numero = parseInt(numGet);

ejercicioUno(numero);

//Ejercicio 2

const genRanNum = () => Math.floor(Math.random() * 10) + 1;

const sumNumbers = () => {
    const numero1 = genRanNum();
    const numero2 = genRanNum();
    const resultadoEsperado = numero1+numero2;

    const tiempoInicio = new Date();

    const respuestaUsuario = prompt(`Cuánto es ${numero1}+${numero2}?`);

    const tiempoFin = new Date();
    const tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000;

    if (respuestaUsuario !== null) {
        const respuestaNumerica = parseInt(respuestaUsuario);

        if (!isNaN(respuestaNumerica) && respuestaNumerica === resultadoEsperado) {
            alert(`Correcto! Tardaste ${tiempoTranscurrido} segundos.`);
        } else {
            alert(`Incorrecto, el resultado era ${resultadoEsperado}. Tardaste ${tiempoTranscurrido} segundos.`);
        }
    } 
};

sumNumbers();


//Ejercicio 3

const arreglo = [0,1,2,0,-3,4,-5,6,-7];
let countNeg = 0;
let countZero = 0;
let countNum = 0;

const contador = (arreglo) => {
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i]<0){
            countNeg = countNeg + 1;
        }
        else if(arreglo[i]==0){
            countZero = countZero + 1;
        }
        else{
            countNum = countNum + 1;
        }
    }
}

contador(arreglo);

document.write("<div class='container'>");
document.write("<br><p class='subtitle'>Ejercicio 3</p>");
document.write(`<p>La cantidad de números negativos es: ${countNeg}</p>`);
document.write(`<p>La cantidad de ceros es: ${countZero}</p>`);
document.write(`<p>La cantidad de números positivos es: ${countNum}</p>`);
document.write("</div>");


//Ejercicio 4

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]



const promedios = (matriz) => {
    document.write("<div class='container'>");
    document.write("<br><p class='subtitle'>Ejercicio 4</p>")
    for (let i = 0; i<matriz.length; i++){
        let sum = 0;
        let avgCount = 0;
        for (let j = 0; j<matriz[i].length; j++){
            let num = matriz[i][j];
            sum = sum + num;
            avgCount = avgCount + 1;
        }
        const avg = sum/avgCount;
        document.write(`<p>Promedio de la fila ${i}: ${avg}</p>`);
    }
    
        
    document.write("</div>");
}

promedios(matriz);

//Ejercicio 5

/*document.write("<div class='container'>");
document.write("<br><p class='subtitle'>Ejercicio 5</p>");


const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

const numReverso = (valor) => {
    parseFloat(valor.toString().split(',').reverse().join('')) * Math.sign(valor);
}

document.write(`<p>${reversedNum(12345)}</p>`)

document.write("</div>");
*/

document.write("<div class='container'>");
document.write("<br><p class='subtitle'>Ejercicio 5</p>");

document.write("<input id='dadoValor' type='text'>");
document.write("<button id='subirValor'>Submit</button>");
document.write("</div>");

const valorInput = document.getElementById('dadoValor');
const trigger = document.getElementById('subirValor');

const numReverso = (valor) => {
    parseFloat(valor.toString().split(',').reverse().join('')) * Math.sign(valor);
}

trigger.onclick = () => {
    hiddenSection.style.visibility = visibile;
    document.write("<div id='hiddenSection' class='container'>");
    document.write(`<p>${numReverso(valorInput)}</p>`);
    document.write("</div>");
} //atender duda con profe

//Ejercicio 6

const largo = 10
const ancho = 10

document.write("<div class='container'>");

document.write("<br><p class='subtitle'>Ejercicio 6</p>");
document.write("<p>El siguiente ejercicio trata de sacar el área y perímetro de un rectángulo </p>")

const area = (largo,ancho) => {
    const resA = largo * ancho;
    document.write(`<p>El área tiene un valor de ${resA}</p>`);
}

const perimetro = (largo,ancho) => {
    const resP = largo+largo+ancho+ancho;
    document.write(`<p>El perímetro tiene un valor de ${resP}</p>`);
}

area(largo,ancho);
perimetro(largo,ancho);



document.write("</div>");

