console.log("----Remover pontuação----", "\n");
const cpf = "011.022.033-44";
let corrige = "";
for (let i of cpf) {
  if (i !== "." && i !== "-") {
    corrige += i;
  }
}
console.log(corrige);
