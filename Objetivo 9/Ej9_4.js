const prompt = require('prompt-sync')();
let valor = 0;
do
{
valor = parseInt(prompt("Introduzca un número mayor que 100: "));
if(valor <= 100)
{
console.log("El valor introducido no es mayor que 100");
}
} while (valor<=100)
console.log("Fin del programa");