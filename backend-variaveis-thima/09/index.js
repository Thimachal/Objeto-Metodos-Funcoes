console.log("-----Soma dos ângulos internos de um polígono-----","\n");
let somaAngulos = 0, ladosPoligono = 3;

function calcula(ladosPoligono){    
    let resultado = ((ladosPoligono-2)*180);
    return resultado;
}
somaAngulos=(calcula(ladosPoligono));
console.log(`Soma dos lados ${somaAngulos.toFixed(2)}`);