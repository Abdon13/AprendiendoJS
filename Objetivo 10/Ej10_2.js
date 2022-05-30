const prompt = require ('prompt-sync')();

function EsMayorQueCero(valor)
{
    if (valor>0)
    console.log("El valor introducido es mayor que cero");
    else 
    console.log("El valor introducido no es mayor que cero");

}

let valorLeido = parseInt(prompt("Introduce un numero: "));
EsMayorQueCero(valorLeido);
