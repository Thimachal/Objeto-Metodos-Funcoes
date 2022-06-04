console.log("----URL amigável----", "\n");
const texto = "Aprenda programar do zero na Cubos Academy";

let textoNovo = texto.toLowerCase();

while (textoNovo.includes(" ")) {
    textoNovo = textoNovo.replace(" ", "-");
}

console.log(textoNovo);