const prompt = require('prompt-sync')();
console.log('Códigos promocionales: ORO, PLATA, BRONCE o PLATINO');
let codigo = prompt('Introduzca su código promocional para saber su descuento: ');
switch(codigo)
{
case "ORO":
console.log("El descuento aplicado es del 25%");
break;
case "PLATA":
console.log("El descuento aplicado es del 15%");
break;
case "BRONCE":
console.log("El descuento aplicado es del 5%");
break;
case "PLATINO":
console.log("El descuento aplicado es del 40%");
break;
default:
console.log("Código promocional no válido");
break;
}