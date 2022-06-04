console.log("---Valor da parcela do Sucesso Compartilhado---", "\n");

let calc = 0;
//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000;

if (mesesDecorridos >=60 || totalJaPagoPeloAluno === 18000){
    console.log("Pode cantar: Livre estou, livre estou...");
}else if(rendaMensalEmCentavos > 2000 && totalJaPagoPeloAluno < 18000 && mesesDecorridos < 60){
    calc = rendaMensalEmCentavos * 18 / 100;
    console.log(`O valor da parcela desse mês é R$ ${calc} reais`);
}else if (rendaMensalEmCentavos <= 2000){
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
}

