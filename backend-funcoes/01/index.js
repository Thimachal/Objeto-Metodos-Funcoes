console.log("-----Sistema de correção de provas-----", "\n");

function corrigirProva(prova) {
  let cont = 0;
  for (let i of prova.questoes)
    if (i.resposta === i.correta) {
      cont += 1;
    }
  return cont;
}

const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

let resultado = corrigirProva(prova);

console.log(
  `O aluno(a) ${prova["aluno"]} acertou ${resultado} questões e obteve nota ${
    resultado * 2
  }`
);
