class Electrodomestico
{
constructor()
{
this._Encendido = false;
this._Tension = 220;
}
Encender() { this._Encendido = true; }
Apagar() { this._Encendido = false; }
EstaEncendido(){ return this._Encendido; }
get Tension(){ return this._Tension; }
set Tension(tension){ this._Tension = tension;}
}
class Lavadora extends Electrodomestico
{
constructor()
{
super();
this._RPM = 0;
this._Kilos = 0;
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
let l = new Lavadora();
l.Mostrar();
l.Encender();
l.Kilos = 7;
l.RPM = 1200;
l.Tension = 125;
l.Mostrar();