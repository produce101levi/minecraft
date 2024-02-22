//consola (log, info, warn, error, assert)

console.log("Hola");
console.info("Esto es información");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
console.assert(1==1);
console.assert(1==2);


//variables, constantes

//Forma antigua de declarar variables
var juego = "Minecraft"

//Constantes
const precio = 50;

//Forma moderna
let cantidad = 1;

//Alertas, prompt, confirm

alert("This ain't for the best...");

const nombre = prompt("Cómo te llamas?");
console.log("Hola, " + nombre);

const hambre = confirm("Tienes hambre?");

if(hambre){
    console.log("Es hora de comer");
}else{
    console.log("Continuemos con el trabajo");
} 

//Funciones tradicionales
function construir(){
    console.log("Construyendo casa");
}

construir();

//funciones modernas
const casa = () => {
    console.log("Construyendo casa anónima");
};

const desayuno = (comida) => {
    console.log("El desayuno de hoy es " + comida);
}

desayuno("huevitos");

//arreglo

const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo.push(5);

arreglo[10] = "Uno más";

console.log(arreglo);

//Recorrido tradicional del arreglo

for(let i = 0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//recorridos alternativos

for(let posicion in arreglo){
    console.log(posicion);
}

//Objetos

const objeto = {atributo: "valor", atributo2: "valor2"};
objeto.atributo3 = 5;
console.log(objeto);

for(let atributo in objeto){
    console.log(atributo);
}

//modificar html
document.write("hola");