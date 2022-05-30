const prompt = require('prompt-sync')();
function Sumar(sumando1,sumando2)
{
    return sumando1 + sumando2 ;

}
let sum1 = parseInt(prompt("Introduzca el primer sumando "));
let sum2 = parseInt(prompt("Introduzca el segundo sumando "));

console.log("Resultado: %s ",Sumar(sum1,sum2));
