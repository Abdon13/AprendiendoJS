const prompt = require('prompt-sync')();
let numero = parseInt(prompt('Escribe un número menor que 10: '));
if(numero>=10)
{
console.log("¡El número que has escrito es mayor o igual que 10!")
}
else
{
console.log("¡El número que has escrito es menor que 10!")
}
console.log("Has escrito el número", numero);