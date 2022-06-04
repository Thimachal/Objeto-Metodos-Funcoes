console.log("----Gerador de Nickname----", "\n");
const nome = "Guido Cerqueira";
let nickName = nome;
while (nickName !== nickName.replace(" ", ""))
  nickName = nickName.replace(" ", "");
nickName = nickName.toLowerCase().slice(0, 12);
console.log("@" + nickName);
