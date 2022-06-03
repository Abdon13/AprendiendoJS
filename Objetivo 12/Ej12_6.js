class Electrodomestico
{
constructor(encendido, tension)
{
this._Encendido = encendido;
this._Tension = tension;
}
Encender() { this._Encendido = true; }
Apagar() { this._Encendido = false; }
EstaEncendido(){ return this._Encendido; }
get Tension(){ return this._Tension; }
set Tension(tension){ this._Tension = tension;}
}
class Lavadora extends Electrodomestico
{
constructor(rpm, kilos, encendido, tension)
{
super(encendido, tension);
this._RPM = rpm;
this._Kilos = kilos;
}
get RPM(){ return this._RPM; }
set RPM(rpm){ this._RPM = rpm; }
get Kilos(){ return this._Kilos; }
set Kilos(kilos){ this._Kilos = kilos; }
Mostrar()
{
    console.log("--- Lavadora ---");
console.log("RPM: ", this._RPM);
console.log("Kilos: ", this._Kilos);
console.log("Tensión: ", this.Tension);
if(this.EstaEncendido())
console.log("¡La lavadora está encendida!");
else
console.log("¡La lavadora está apagada!");
console.log("----------------");
}
}
let l = new Lavadora(1200, 7, false, 125);
l.Mostrar();
l.Encender();
l.Kilos = 8;
l.RPM = 1500;
l.Tension = 220;
l.Mostrar();