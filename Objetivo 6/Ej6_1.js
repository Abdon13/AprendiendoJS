let fechaactual = new Date();
let fechapasada = new Date(2016,1,21,20,30,0,0);
console.log("Fecha actual:", fechaactual.toString());
console.log("Fecha pasada:", fechapasada.toString());
fechapasada = new Date(2016,1,21,20,30,0);
console.log("Fecha pasada 2:", fechapasada.toString());
fechapasada = new Date(2016,1,21,20,30);
console.log("Fecha pasada 3:", fechapasada.toString());
fechapasada = new Date(2016,1,21,20);
console.log("Fecha pasada 4:", fechapasada.toString());
fechapasada = new Date(2016,1,21);
console.log("Fecha pasada 5:", fechapasada.toString());
fechapasada = new Date(2016,1);
console.log("Fecha UTC:", fechaactual.toUTCString())