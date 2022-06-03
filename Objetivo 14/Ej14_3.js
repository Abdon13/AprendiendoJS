var fs = require('fs');
let cadena = "Es un lugar desorbitande\n donde nunca quiero alejarme";

fs.writeFileSync("nuevo.txt",cadena);
console.log("El archivo fue creado correctamente");

const datos= fs.readFileSync('nuevo.txt','utf8');
console.log("Fichero leido: ");
console.log(datos);