let fecha = new Date();
console.log("Fecha:", fecha.toString());
fecha.setFullYear(2000);
console.log("Fecha (Año):", fecha.toString());
fecha.setMonth(0);
console.log("Fecha (Mes):", fecha.toString());
fecha.setDate(1);
console.log("Fecha (Día):", fecha.toString());
fecha.setHours(8);
console.log("Fecha (Hora):", fecha.toString());
fecha.setMinutes(30);
console.log("Fecha (Minutos):", fecha.toString());
fecha.setSeconds(54);
console.log("Fecha (Segundos):", fecha.toString());
fecha.setMilliseconds(333);
console.log("Fecha (Milisegundos):", fecha.toString());
console.log(fecha);