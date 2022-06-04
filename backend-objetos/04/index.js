console.log("---Adicionando maior idade---","\n");

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

console.log(usuarios);

for(let i of usuarios){
    i.maior_idade = i.idade > 17;
    console.log(`Maior idade? ${i['maior_idade']}`);
}