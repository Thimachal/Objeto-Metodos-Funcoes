console.log("-----Grupos de carros-----", "\n");

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
function grupoDeCarros(nomes, posicaoDoVeiculo) {
    console.log(nomes.splice(posicaoDoVeiculo, 3).join(" - "));
}
grupoDeCarros(nomes, posicao);