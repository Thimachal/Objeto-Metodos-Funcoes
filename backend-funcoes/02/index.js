console.log("-----Carro-----", "\n");

const carro ={
    ligado: false,
    velocidade: 0,
    ligar: function(){
       if(this.ligado === false){
           this.ligado = true;
            this.status();
           console.log(`carro ligado ${this.ligado}`);
       } else{
           console.log(`Este carro já está ligado`);
       }
    },
    desligar: function(){
        if(this.ligado === true){
            this.ligado = false;
            this.velocidade = 0;
            this.status();
            console.log(`carro desligado ${this.ligado}`);
        } else{
            console.log(`Este carro já está desligado`);
        }
     },
     acelerar: function(){
        if(this.ligado === false){
            console.log(`Não é possível acelerar um carro desligado.`);
        }else{
            this.velocidade += 10;
            this.status();
        }
     },
     desacelerar: function(){
        if(this.ligado === false){
            console.log(`Não é possível desacelerar um carro desligado.`);
        }else{
            this.velocidade -= 10;
            this.status();
        }
     },
     status: function(){
         let statusLigado = this.ligado === true ? `Ligado`:`Desligado`;
         
         console.log(`Carro ${statusLigado}. Velocidade ${this['velocidade']}`);
     }
}

carro.desligar();//1
carro.ligar();//2
carro.ligar();//3
carro.acelerar();//4
carro.acelerar();//5
carro.desacelerar();//6
carro.desligar();//7
carro.acelerar();//8
carro.desacelerar();