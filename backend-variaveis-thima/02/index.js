console.log("----Conversor Fahrenheit x Celsius -----","\n");
let resultado = 0, fah = 73;

function calculaFC(fahrenheit){
    let conversao = 5*(fahrenheit-32)/9;
    return conversao;
}
resultado=(calculaFC(fah));
console.log(`A conversão de ${fah}º Fahrenheit em Celsius é de ${resultado.toFixed(2)}º`);