const prompt = require ('prompt-sync')();

function SolicitarNumero()
{
    let valor = parseInt(prompt("Introduzca un numero "));
    return valor;
}
function Sumar(){
    let valor1 = SolicitarNumero();
    let valor2 = SolicitarNumero();
    let valor3 = SolicitarNumero();
    console.log("Resultado suma: %s", (valor1 + valor2 + valor3));

}
Sumar();