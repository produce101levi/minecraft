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

document.write("<div class='container'>");
document.write("<br><p class='subtitle'>Ejercicio 5</p>");

const numReverso = valor => 
    parseFloat(valor.toString().split('').reverse().join('')) * Math.sign(valor);


//Número a invertir: 12345

document.write(`<p>Este programa invertirá el número 12345.</p>`)
document.write(`<p>${numReverso(12345)}</p>`)
document.write(`</div>`)

//Ejercicio 6

document.write(`<div class ='container'>`);
document.write(`<br><p class="subtitle">Ejercicio 6</h2>`);
document.write(`<p>Para este ejercicio, debemos tomar en consideración que éste se trata de 
un rectángulo con un largo de 10cm y un ancho de 5cm.</p>`);
const crearRectangulo = (largo, ancho) => {
    return {
        largo,
        ancho,

        calcularArea: () => largo * ancho,
        calcularPerimetro: () => 2 * (largo + ancho)
    };
}


const rectangulo = crearRectangulo(10, 5);


const area = rectangulo.calcularArea();
document.write(`<p>El área tiene un valor de ${area}</p>`);


const perimetro = rectangulo.calcularPerimetro();
document.write(`<p>El perímetro tiene un valor de ${perimetro}</p>`);

document.write(`</div>`);


document.write(`<p><strong>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</strong>
<br> JavaScript y Java son similares en su sintáxis básica y el hecho de que ambos
lenguajes se basan en objetos. Sin embargo, Java se basa en la creación de aplicaciones,
mientras que JavaScript se basa en la creación de sitios web. Java se debe ejecutar
con su propio entorno de ejecución, mientras que JavaScript se ejecuta directamente
en los navegadores web.<br>
¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)
<br> getFullYear(), getMonth(), getDay(), getHours(), getDate(). <br>
¿Qué métodos tienen los arreglos? (Menciona al menos 5*)
<br> toString(), length, at(), join(), pop(), push() <br>
¿Cómo se declara una variable con alcance local dentro de una función?
<br> Con "var", "let" o "const" <br>
¿Qué implicaciones tiene utilizar variables globales dentro de funciones?
<br>El código fuente es menos legible, la variable no puede ser modificada por la función, 
la seguridad se reduce, etc.</p>`)