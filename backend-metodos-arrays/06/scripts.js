console.log("-----Encontrar dono do pet-----", "\n");

function buscaPet(nomes, nomeDoPet) {
    for (i of nomes) {
        if (i.pets.includes(nomeDoPet)) {
        console.log(`O dono(a) do(a) ${nomeDoPet} é o(a) ${i.nome}`);
        }
    }
    console.log(`Que pena ${nomeDoPet}, não encontramos seu dono(a)`);
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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
nomeDoPet = "Batata";
buscaPet(usuarios, nomeDoPet);