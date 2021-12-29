alert("Adivina el numero secreto");

var max =100;

var min =1; 

var numeroRango = Math.random()*(max-min) + min;
console.log(numeroRango);

numeroRango = parseInt(numeroRango);

console.log(numeroRango);

var mensaje="Ingresa un numero para adivinar el numero magico o preciona cero(0) para salir";

while(true){
    var numeroUsuario = prompt(mensaje,"0");
    numeroUsuario = parseInt(numeroUsuario);
    if(numeroUsuario==numeroRango){
        alert("Felicidades ese era el numero secreto")
        break
    }

    else if(numeroUsuario>numeroRango){
        mensaje = ("El numero que ingresaste es mayor que el numero secreto")
    }

    else if(numeroUsuario<numeroRango && numeroUsuario>0){
        mensaje=("El numero que ingresaste es menor que el numero secreto")
    }

    else if(numeroUsuario===0){
        alert("Hasta la proxima")
        break;
    }
}