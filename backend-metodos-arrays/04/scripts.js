console.log("-----Fila de atendimento-----", "\n");
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

let tipoDeOp = "a";
let nomeDoPaciente = "Ariel";

function filaAtendimento (pacientes,tipoDeOp,nome){
    if(tipoDeOp.toLowerCase() == "agendar"){
        pacientes.push(nome);
    } else pacientes.shift();
    return console.log(pacientes.join(", "));
}

filaAtendimento(pacientes,tipoDeOp,nomeDoPaciente);