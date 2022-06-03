const fs = require('fs');
const datos= fs.readFileSync('fichero.txt','utf8');
console.log(datos);