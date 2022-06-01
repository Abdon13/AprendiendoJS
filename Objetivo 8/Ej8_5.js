const prompt = require('prompt-sync')();
console.log('Códigos promocionales: ORO, PLATA, BRONCE o PLATINO');
let codigo = prompt('Introduzca su código promocional para saber su descuento: ');
if (codigo == "ORO")
{
console.log("El descuento aplicado es del 25%");
}
else if(codigo=="PLATA")
{
console.log("El descuento aplicado es del 15%");
}
else if(codigo=="BRONCE")
{
console.log("El descuento aplicado es del 5%");
}
else if(codigo=="PLATINO")
{
console.log("El descuento aplicado es del 40%");
}
else
{
console.log("Código promocional no válido");
}