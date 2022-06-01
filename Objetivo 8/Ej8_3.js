const prompt = require('prompt-sync')();
let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));
if(numero1 > numero2)
{
console.log("Resultado comparación: el primer número es mayor que el segundo");
}
else
{
if(numero2 > numero1)
{
console.log("Resultado comparación: el segundo número es mayor que el primero");
}
else
{
console.log("Resultado comparación: ambos números son iguales");
}
}