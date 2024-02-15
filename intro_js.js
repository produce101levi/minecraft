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