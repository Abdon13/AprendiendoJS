var fs = require('fs');
fs.writeFileSync('nuevalinea.txt',"En un desorbitante\n",{flag: "a+"});
fs.writeFileSync('nuevalinea.txt',"donde no me quiero alejar\n",{flag: "a+"});
fs.writeFileSync('nuevalinea.txt',"aunque me confunda y no sepa que hacer\n",{flag: "a+"});
fs.writeFileSync('nuevalinea.txt',"se que es la mejor opcion\n",{flag: "a+"});

console.log("El archivo fue creado correctamente");

const datos= fs.readFileSync('nuevlinea.txt','utf8');
console.log("Fichero leido: ");
console.log(datos);
