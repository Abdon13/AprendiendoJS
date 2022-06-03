class Punto
{
constructor(X, Y)
{
this._X = X;
this._Y = Y;
}
mostrarPunto()
{
console.log("(%s, %s)", this.X, this.Y);
}
get X()
{
return this._X;
}
set X(nuevaX)
{
this._X = nuevaX;
}
get Y()
{
return this._Y;
}
set Y(nuevaY)
{
this._Y = nuevaY;
}
}
class Triangulo
{
constructor(punto1, punto2, punto3)
{
this._punto1 = punto1;
this._punto2 = punto2;
this._punto3 = punto3;
}
get Punto1()
{
return this._punto1;
}
set Punto1(punto1)
{
this._punto1 = punto1;
}
get Punto2()
{
return this._punto2;
}
set Punto2(punto2)
{
this._punto2 = punto2;
}
get Punto3()
{
return this._punto3;
}
set Punto3(punto3)
{
this._punto3 = punto3;
}
MostrarTriangulo()
{
console.log("--- Triángulo ---")
this._punto1.mostrarPunto();
this._punto2.mostrarPunto();
this._punto3.mostrarPunto();
console.log("-----------------")
}
}
let p1 = new Punto(3, 4);
let p2 = new Punto(6, 8);

let p3 = new Punto(9, 2);
let triangulo = new Triangulo(p1, p2, p3);
triangulo.MostrarTriangulo();
p1.X = 4;
p2.Y = 1;
p3.X = 5;
p3.Y = 5;
triangulo.Punto1 = p1;
triangulo.Punto2 = p2;
triangulo.Punto3 = p3;
triangulo.MostrarTriangulo();