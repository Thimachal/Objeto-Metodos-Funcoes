console.log("----Sistema de formatação de dados do formulário----", "\n");
let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


identificador = identificador.padStart(6, 0);

let nomeCorrigido = "";
let arrayNome = nome.split(" ");
for (let item of arrayNome) {
    nomeCorrigido += item[0].toUpperCase() + item.slice(1) + " ";
}
nome = nomeCorrigido.trim();

email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);