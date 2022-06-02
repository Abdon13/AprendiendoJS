let animales = ["Perro", "Gato", "Periquito", "Conejo"];
console.log(animales);
for (i in animales)
{
    console.log(i, ":", animales[i]);
}
for (animal of animales)
{
    console.log(animal);
}