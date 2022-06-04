console.log("---Meus pets---","\n");
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
let total=0;

for(i of usuarios){
    if(i.pets.length > 0){
        total = i.pets.length;
        let plural = total === 1? 'pet' : 'pets';
        console.log(`Sou ${i['nome']} e tenho ${total} ${plural}`);
    }else{
        console.log(`Sou ${i['nome']} e não tenho pets`);
    }
}
