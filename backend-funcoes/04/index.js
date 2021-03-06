console.log("-----Sistema de transações bancárias-----", "\n");


const contaBancaria = {
    nome: 'Maria',
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
      this.saldo += valor
      this.historicos.push({
        tipo: 'Deposito',
        valor: valor
      })
      console.log(
        `Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
      )
    },
    sacar: function (valor) {
      if (valor > this.saldo || valor < 0) {
        console.log(`Saldo insuficiente para o saque do Cliente: ${this.nome}`)
      } else {
        this.saldo -= valor
        this.historicos.push({
          tipo: 'Saque',
          valor: valor
        })
        console.log(
          `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
        )
      }
    },
    extrato: function () {
      console.log(`Extrato de ${this.nome} - Saldo: ${this.saldo} 
      Historico`)
      for (itens of this.historicos) {
        console.log(`${itens.tipo} de R$ ${itens.valor / 100}`);
      }
    }
  }
  console.log(contaBancaria.depositar(10000));
  console.log(contaBancaria.sacar(50000));
  console.log(contaBancaria.sacar(5000));
  console.log(contaBancaria.extrato());