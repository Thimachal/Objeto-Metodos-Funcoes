console.log("---Transformar nota em conceito---", "\n");
const nota = 8.5;
let migra = "";

migra = (nota >=9 ? "A" : nota >=8 ? "B" : nota >=6 ?"C" : nota >= 4?"D" : "E");
console.log(`O estudando obteve conceito ${migra}`);