console.log("----Formatar número de celular----", "\n");
const celular = 7199918888;

let numeroFormatadoString = String(celular);
let celularFormatado = "";

if (numeroFormatadoString.length === 10) {
    celularFormatado = numeroFormatadoString.slice(0, 2).padStart(3, "(").padEnd(4, ")") + " ";
    celularFormatado += "9 " + numeroFormatadoString.slice(2, 6) + "-" + numeroFormatadoString.slice(6);
    console.log(celularFormatado);

} else if (numeroFormatadoString.length === 8) {
    celularFormatado = "9 " + numeroFormatadoString.slice(0, 4) + "-" + numeroFormatadoString.slice(4);    console.log(celularFormatado);

} else {
    console.log("Número Inválido.")
}