console.log("---Pedra, papel ou tesoura---","\n");

let jogada1 = "pedra";
let jogada2 = "tesoura";

if (jogada1 === "pedra" && jogada2 === "tesoura"){
    console.log(`Ganha a ${jogada1}`);
}else if (jogada1 === "tesoura" && jogada2 === "pedra"){
    console.log(`Ganha a ${jogada2}`);
} else{
    console.log("Ihh deu empate, joga novamente");
}