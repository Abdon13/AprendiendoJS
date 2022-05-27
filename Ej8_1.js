const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Escribe un número menos que 10: "));
if (numero>=10)
{
    console.log("El número que has escrito es amyor o igual que 10")

}
console.log("Has escrito el numero",numero);