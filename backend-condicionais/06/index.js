console.log("---Definindo as posições---", "\n");
const alturaEmCm = 185;

if (alturaEmCm >= 180) {
  console.log("Aprovado");
  if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("Será Libero");
  } else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("Será Ponteiro");
  } else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("Será Oposto");
  } else console.log("Será Central");
} else {
  console.log("Reprovado");
}
