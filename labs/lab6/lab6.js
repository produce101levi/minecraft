const boton = document.getElementById("submit");
const boton1 = document.getElementById("mostrar");
const text = document.getElementById("campoEscondido");
const title = document.getElementById("vdc");
const preguntas = document.getElementById("preguntas");
const bienvenida = document.getElementById("prfdbvd");
const textoPreguntas = document.getElementById("textoPreguntas");

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
        textoPreguntas.style.color = "#544B6C"

    } else{
        alert('Error');
    }

}

const indicadorFortaleza = document.getElementById("passwordStrength");
const inputContra = document.getElementById("password");

const revisarFortaleza = () => {
    const contra = inputContra.value;
    const fortaleza = calculatePasswordStrength(contra);

    indicadorFortaleza.textContent = `Seguridad de contraseña: ${fortaleza}/10`;
}

const calculatePasswordStrength = (contra) => {
    const minLength = 8;
    const hasMayus = /[A-Z]/.test(contra);
    const hasMinus = /[a-z]/.test(contra);
    const hasNumero = /\d/.test(contra);
    const hasCarEsp = /[!@#$%&^*()_+{}:;<>,.?~/-]/.test(contra);

    let fortaleza = 0;

    if (contra.length >= minLength){
        fortaleza += 2;
    }
    if (hasMayus){
        fortaleza +=2;
    }
    if (hasMinus){
        fortaleza +=2;
    }
    if (hasNumero){
        fortaleza +=2;
    }
    if (hasCarEsp){
        fortaleza +=2;
    }

    return fortaleza;

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