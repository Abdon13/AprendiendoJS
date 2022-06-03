const prompt = require('prompt-sync')();
function SolicitarNumero()
{
let numero = parseInt(prompt("Inserte número entre 0 y 10: "));
if(isNaN(numero)) throw "El valor introducido no es un número";
if(numero > 10) throw "Número muy grande";
if(numero < 0) throw "Número muy pequeño";
return numero;
}
try
{
console.log("Número introducido: %s", SolicitarNumero());
}
catch (e)
{
console.log("ERROR: %s", e)
}
finally
{
console.log("Programa finalizado")
}