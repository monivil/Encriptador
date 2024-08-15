const textoArea = document.querySelector(".texto");
const textoEncript = document.querySelector(".texto-encript");



async function botonCopiar() {
     // llama al texto del textarea que contiene el texto encriptado
    const textoIni = document.getElementById("textoInicial").value;
    
    // Usa Clipboard API para copiar el texto al portapapeles
    await navigator.clipboard.writeText(textoIni);
        
    // Pega el texto en el otro textarea
    document.getElementById("textoFinal").value = textoIni;

    eliminaFondo()

}

// toma el texto ingresado y lo encripta y lo muestra en el cuadro
function botonEncriptador(){
    if (textoArea.value === ""){
        alert("ingrese el texto para encriptar");
    }else{
    const textoEncriptado = encriptador(textoArea.value);
    textoEncript.value = textoEncriptado
    eliminaFondo()
    }
} 

//toma el texto Encripptado lo pasa por la funcion desencriptador y lo muestra 
function botonDesencriptador(){
    const textoEncriptado = desencriptador(textoArea.value);
    textoEncript.value = textoEncriptado
    textoArea.value = "";
    
}

//convierte cada vocal de la palabra ingresada en el parametro dado en la matriz
function encriptador(encripta){
    let llave = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    encripta = encripta.toLowerCase()

    for(let i = 0; i < llave.length; i++){
        if(encripta.includes(llave[i][0])){
            encripta = encripta.replaceAll(llave[i][0], llave[i][1])
        
        }
    }
    return encripta;

    
}

function desencriptador(encripta){
    let llave = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    encripta = encripta.toLowerCase()

    for(let i = 0; i < llave.length; i++){
        if(encripta.includes(llave[i][1])){
            encripta = encripta.replaceAll(llave[i][1], llave[i][0])
        }
    }
    return encripta;
}

//no muestra la imagen de fondo
function eliminaFondo(){
    fondoTexto = document.getElementById("textoInicial");     
    fondoTexto.style.backgroundImage = 'none';
    return eliminaFondo;
}