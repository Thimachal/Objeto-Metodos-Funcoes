console.log("---Dando nome as pedras---", "\n");
const ladoA = 3;
const ladoB = 3;
let bucha = ["Branco", "Ás", "Duque", "Terno", "Quadra", "Quina", "Sena"];

if (ladoA > 6 || ladoB > 6) {
  console.log("Tem gato nesse dominó");
} else if (ladoA === ladoB) {
  console.log(`É bucha de ${bucha[ladoA]}`);
} else {
  console.log("Não é bucha");
}
