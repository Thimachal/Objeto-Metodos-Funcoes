console.log("-----Carrinho de um e-commerce-----", "\n");
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        },

    ],
    imprimirResumo: function () {
            for (item of this.produtos) {
           
        }
        console.log(`Cliente:${carrinho.nomeDoCliente}`);
        console.log(`Total de itens na sacola: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$: ${this.calcularTotalAPagar()}`);

    },
    addProduto: function (produto) {
        let possuiItemNaLista = false;
        let indice = 0;

        for (let i = 0; i < carrinho.produtos.length; i++) {
            if (carrinho.produtos[i].id == produto.id) {
                possuiItemNaLista = true;
                indice = i;
                break;

            } else {
                possuiItemNaLista = false;
            }
        }

        if (!possuiItemNaLista) {
            carrinho.produtos.push(produto)
        } else if (possuiItemNaLista) {
            carrinho.produtos[indice].qtd += produto.qtd;
        }

    },
    imprimirDetalhes: function () {
        console.log(`nome do cliente: ${this.nomeDoCliente}`);
        for (item of this.produtos) {

            console.log(`item 1: - ${item.nome}, ${item.qtd}, ${item.precoUnit * item.qtd / 100}`);
          

        };
        console.log(`TOTAL DE ITENS: ${this.calcularTotalDeItens()} ITENS`);
        console.log(`TOTAL A PAGAR: ${this.calcularTotalAPagar()}`)


    },
    calcularTotalDeItens: function () {
        quantItens = 0;
        for (let item of this.produtos) {
            quantItens += item.qtd;
        }
        return (quantItens);
    },
    calcularTotalAPagar: function () {
        ValorTotalFuncao = 0;
        for (let item of this.produtos) {
            ValorTotalFuncao += (item.qtd * item.precoUnit);
        }
        return (ValorTotalFuncao);
        
    },
    calcularDesconto: function () {
        let desconto = 0;
        let menorValor = carrinho.produtos[0].precoUnit;
        if (this.calcularTotalDeItens() > 4) {
            for (let item of carrinho.produtos) {
                if (item.precoUnit < menorValor) {
                    menorValor = item.precoUnit;

                }
            }
            desconto = menorValor;

        };
        if (this.calcularTotalAPagar() > 10000) {
            if (desconto > ((this.calcularTotalAPagar() * 10) / 100)) {
                console.log(`o desconto de 5 pecas é maior que o de 10% deve ter de desconto ${desconto / 100}`);
            } else {
                console.log(`o desconto de 10% é maior que o de 5 pecas ${(this.calcularTotalAPagar() * 10 / 100) / 100}`);
            };
        };

    },


}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}