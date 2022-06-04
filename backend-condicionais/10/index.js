console.log("---Identificando caracteres---", "\n");
const caractere = "E";

if (caractere == "a" || caractere == "e" || caractere == "i" || caractere == "o" || caractere == "u"){
    console.log(`Vogal minuscula ${caractere}`);
} else if (caractere === "A" || caractere == "E" || caractere == "I" || caractere == "O" || caractere == "U"){
    console.log(`Vogal maiúscula ${caractere}`);
} else if (caractere >= 0) {
    console.log(`número ${caractere}`);
} else {
    console.log(`consoante${caractere}`);
}