let animales1 = ["Perro", "Gato", "Periquito"];
let animales2 = new Array("Caballo", "Pez");
let animales3 = ["Rana", "Conejo"];
console.log(animales1);
console.log(animales2);
console.log(animales3);
let animalesUnion = animales1.concat(animales2);
console.log(animalesUnion);
let animalesUnion2 = animales1.concat(animales2, animales3);
console.log(animalesUnion2);
let animalesUnion3 = animales2.concat("Ballena");
console.log(animalesUnion3);