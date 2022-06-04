console.log("----Esconder número do cartão de crédito----", "\n");
const numeroCartao = '1111222233334444';

let Ocultacao = numeroCartao.slice(4, 12);
let CartaoOculto = numeroCartao.replace(Ocultacao, "********");

console.log(CartaoOculto);