console.log("---Encontrando Carlos na multidão---","\n");
const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]
let cont=0;
for(i of participantes){
    if(i.nome === "Carlos"){
        console.log(`Galera... O Carlos está na posição ${cont}, corre lá!`);
    }
    cont++;
}