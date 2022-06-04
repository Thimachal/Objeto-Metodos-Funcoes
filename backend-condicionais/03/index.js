console.log("---Dominó---","\n");
const ladoA = 3;
const ladoB = 3;

if (ladoA > 6 || ladoB > 6) {
    console.log("Tem gato nesse dominó");
}else if(ladoA === ladoB){
    console.log("É bucha");
}else{
    console.log("Não é bucha");
}