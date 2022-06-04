console.log("---Dia da Semana---", "\n");
const diaSemana = 10;
let resultado;

resultado =
  diaSemana === 1
    ? "Segunda"
    : diaSemana === 2
    ? "Terça"
    : diaSemana === 3
    ? "Quarta"
    : diaSemana === 4
    ? "Quinta"
    : diaSemana === 5
    ? "Sexta"
    : diaSemana === 6
    ? "Sabado"
    : diaSemana === 7
    ? "Domingo"
    : "O dia da semana informado não é válido.";
console.log(`${resultado}`);
