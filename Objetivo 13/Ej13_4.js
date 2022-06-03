const prompt = require('prompt-sync')();
function Sumar()
{
let sumando1 = parseInt(prompt("Inserte primer sumando: "));
let sumando2 = parseInt(prompt("Inserte segundo sumando: "));
console.log("Resultado de la suma: " + (sumando1 + sumando2));
}
try
{
Smar();
}
catch(e)
{
console.log("ERROR: %s",e.message)
}
finally
{
console.log("Programa finalizado")
}