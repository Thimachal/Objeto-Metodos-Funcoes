console.log("----Validação de arquivos----", "\n");
const nomeArquivo = 'Foto da Familia.pdf';

let corrigido = nomeArquivo.slice(nomeArquivo.indexOf(".", -1))

if (corrigido == ".jpg" || corrigido == ".jpeg" || corrigido == ".gif" || corrigido == ".png") {
    console.log("Arquivo válido");
} else {
    console.log("Arquivo inválido");
}