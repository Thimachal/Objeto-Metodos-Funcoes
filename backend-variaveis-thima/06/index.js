console.log("----Velocidade média-----","\n");
let velocidade = 0, distInicial = 0, DistAtual = 100,  tempInicial = 0, tempFinal = 60;


velocidade=(distInicial-DistAtual)/(tempInicial-tempFinal);
velocidade*=3.6;
console.log(`Velocidade é de ${velocidade.toFixed(2)} km/h`);