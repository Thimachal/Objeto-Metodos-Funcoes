console.log("-----Taxa de Juros-----","\n");
let resultado =0;
let m = 40000;
let c = 30000;
let n = 24;

let resultado= Math.pow(m / c, (1 / n)) - 1;

resultado=0;
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${resultado}%, pois após ${n} meses você teve que pagar ${m.toFixed(2)} reais`);