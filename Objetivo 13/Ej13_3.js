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
catch
{
console.log("ERROR: Se ha producido un error")
}
finally
{
console.log("Programa finalizado")
}