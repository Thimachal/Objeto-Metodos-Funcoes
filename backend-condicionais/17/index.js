console.log("---Extrato de Compra Online---", "\n");
//valor do produto comprado.
const valorDoProduto = 1000;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago
const valorPago = 300;
let calcValorParcela = 0;
let calcValorRestante = 0;
let calcParcelasRestantes = 0;

calcValorParcela = valorDoProduto / quantidadeDoParcelamento;
calcValorRestante = valorDoProduto - valorPago;
calcParcelasRestantes = calcValorRestante / calcValorParcela;
console.log(`Restam ${calcParcelasRestantes} parcelas de R$${calcValorParcela}`);