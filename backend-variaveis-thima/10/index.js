console.log("----Delta-----","\n");
let resultado = 0, valorA = 5, valorB = 6, valorC = 1;


function calculaFC(valorA,valorB,valorC){    
    let delta=(valorB*valorB)-4*valorA*valorC;
    return delta;
}
resultado=(calculaFC(valorA,valorB,valorC));
console.log(`Delta é ${resultado}`);