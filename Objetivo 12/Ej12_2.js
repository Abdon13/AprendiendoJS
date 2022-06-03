class Punto{
    constructor(X,Y)
    {
        this.X=X
        this.Y=Y;
    }
    mostrarPunto()
    {
        console.log("El punto es (%s,%s)",this.X,this.Y);

    }
}
let punto = new Punto (3,3);
punto.mostrarPunto();
let punto2 = new Punto(8,7);
punto2.mostrarPunto();