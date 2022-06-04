console.log("----Calcular juros compostos-----","\n");
let montante = 0, capital = 1000, tempoMeses = 5;
const taxaMensalFixa = 0.125;

function calculaFC(capital,tempoMeses){    
    let montante = capital*Math.pow((1+taxaMensalFixa),tempoMeses);
    return montante;
}
montante=(calculaFC(capital,tempoMeses));
console.log(`O montante é de R$ ${montante.toFixed(2)}`);