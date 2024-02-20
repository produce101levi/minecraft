const boton = document.getElementById("submit");
const boton1 = document.getElementById("mostrar");
const text = document.getElementById("campoEscondido");
const title = document.getElementById("vdc");
const preguntas = document.getElementById("preguntas");
const bienvenida = document.getElementById("prfdbvd");

const mostrarAcceso = () => {
    campoEscondido.style.visibility = "visible";
    
}

const subirContrasena = () => {

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmp").value;

    if (password === confirmPassword){
        alert('Contraseña verificada');
        preguntas.style.visibility = "visible";
        vdc.style.color = "#534E7E";
        bienvenida.style.color = "#6e67a2";
        text.style.color = "#6F9064";
    } else{
        alert('Error');
    }

}

const cambiarFuente = () => {
    boton.style.fontFamily = "serif";
    boton1.style.fontFamily = "serif";
}

const restaurarFuente = () => {
    boton.style.fontFamily = "sans-serif";
    boton1.style.fontFamily = "sans-serif";
}

boton1.onmouseover = cambiarFuente;
boton1.onmouseout = restaurarFuente;
boton.onmouseover = cambiarFuente;
boton.onmouseout = restaurarFuente;

boton.onclick = subirContrasena;
boton1.onclick = mostrarAcceso;