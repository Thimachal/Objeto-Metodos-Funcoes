console.log("---Separando jovens de adulto---","\n");
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [
    {
    nome:"",
    idade: 0,
    }
]

const adultos = [
    {
    nome:"",
    idade: 0,
    }
]

let contJovens =0;
let contAdultos =0;
for(i of usuarios){
if (i.idade >= 18){
    
    jovens[contJovens]=i;
    contJovens++;
}else{
    adultos[contAdultos]=i;
    contAdultos++;
}
}
console.log("Só Adultos");
console.log(adultos);
console.log("\n"+ "Só Jovens");
console.log(jovens);