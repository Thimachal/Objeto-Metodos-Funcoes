console.log("-----Divisão de grupos-----", "\n");

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 2;

function meChama(nomes, tam) {
    let grupo = nomes.splice(0, tam), grupoAlternativo = nomes;
    console.log(`Grupo 1: ${grupo.join()}
    Grupo 2: ${grupoAlternativo.join()}`);
}
meChama(nomes, tamanhoDoGrupo);