console.log("---Compra com Desconto---", "\n");

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
let valorDoProduto = 130;

console.log(valorDoProduto);

switch (tipoDePagamento) {
  case "credito":
    valorDoProduto = valorDoProduto - valorDoProduto * 0.05;
    console.log(`Valor a ser pago: ${valorDoProduto.toFixed(2)}`);
    break;

  case "cheque":
    valorDoProduto = valorDoProduto - valorDoProduto * 0.03;
    console.log(`Valor a ser pago: ${valorDoProduto.toFixed(2)}`);
    break;
  case "debito":
    valorDoProduto = valorDoProduto - valorDoProduto * 0.1;
    console.log(`Valor a ser pago: ${valorDoProduto.toFixed(2)}`);
    break;
  case "dinheiro":
    valorDoProduto = valorDoProduto - valorDoProduto * 0.1;
    console.log(`Valor a ser pago: ${valorDoProduto.toFixed(2)}`);
    break;
  default:
    console.log(`Opção inválida, tente novamente`);
    break;
}