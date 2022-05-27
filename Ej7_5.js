const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));

console.log("Resultado (", numero1, ">", numero2, "):", (numero1>numero2));
console.log("Resultado (", numero1, " >= ", numero2, "):", (numero1 >= numero2));
console.log("Resultado (", numero1, " < ", numero2, "):", (numero1 < numero2));
console.log("Resultado (", numero1, " <= ", numero2, "):", (numero1 <= numero2));
console.log("Resultado (", numero1, " == ", numero2, "):", (numero1 == numero2));
console.log("Resultado (", numero1, " != ", numero2, "):", (numero1 != numero2));