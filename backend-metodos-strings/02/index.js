console.log("----Sistema para formatar números----", "\n");
const cpf = "12345678900";
const cnpj = "12345678900";

if (cpf.length === 11){
        let cpfCorrigido = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9);
    console.log(cpfCorrigido);
}else{
console.log('CPF inválido');
}


if (cnpj.length === 14){
    let cnpjCorrigido = cnpj.slice(0, 2) + "." + cnpj.slice(2, 5) + "." + cnpj.slice(5, 8) + "/" + cnpj.slice(8, 12) + "-" + cnpj.slice(12);
    console.log(cnpjCorrigido);
}else{
console.log('CNPJ Inválido');
}