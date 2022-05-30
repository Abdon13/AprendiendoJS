const prompt = require('prompt-sync')();
let valor=0;
let fin= false;
while(!fin)
{
valor = parseInt(prompt("Introduzca un numero mayor que 100 "));
    if(valor>100)
    {
        fin=true;
    }
    else{
        console.log("El valor introducido no es mayor que 100 ");
    }

}
console.log("Fin del programa");
