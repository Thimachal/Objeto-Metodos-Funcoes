console.log("----Desconto do Tênis-----","\n");
let resultado = 0, valorInicial = 129.99, valorComDesconto = 80;
const porcentagem = 100;

function calculaFC(valorInicial,valorComDesconto){    
    let resultado = (porcentagem*valorComDesconto)/valorInicial;
    return resultado;
}
resultado=(calculaFC(valorInicial,valorComDesconto));
console.log(`A porcetagem de desconto necessária é de ${resultado.toFixed(2)}%`);