let cadena = "uno, dos, tres";
console.log("Cadena: ", cadena);
cadena = cadena.concat(", cuatro, cinco");
console.log("Cadena: ",cadena);
let cadena2 = "Seis, siente";
cadena = cadena.concat(",",cadena2);
console.log("Cadena: ",cadena);
cadena = cadena.replace("dos", "Two");
console.log("Cadena reemplazada: ",cadena);
cadena= cadena.replace("uno ", "one");
console.log("cadena que no reemplaza Uno:", cadena)