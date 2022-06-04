console.log("----Calculadora de IMC-----\n");
let resultado = 0;

function calculaIMC(peso, altura){
    let imc = peso / (altura*altura);
    return imc;
}
resultado=(calculaIMC(75,1.77));
console.log(`O IMC é de ${resultado.toFixed(2)}`);