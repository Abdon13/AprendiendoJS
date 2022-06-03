class Punto
{
    constructor(X,Y)
    {
        this._X=X;
        this._Y=Y;
    }
    mostrarPunto()
    {
        console.log("El punto es(%s,%s)",this.X,this.Y);
    }
    get X()
    {
        return this._X;
    }
    set X(nuevaX)
    {
        this._X=nuevaX;
    }
    get Y()
    {
        return this._Y;
    }
    set Y(nuevaY)
    {
        this._Y=nuevaY;
    }
}
let punto = new Punto(3,3);
punto.mostrarPunto();
console.log("Coordenada X: %s",punto.X);
console.log("Coordenada Y: %s",punto.Y);
console.log("--Punto modificado--");
punto.X=7;
punto.Y=5;
punto.mostrarPunto();
console.log("Coordenada X: %s",punto.X);
console.log("Coordenada Y: %s",punto.Y);

