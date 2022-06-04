console.log("---Isenção de impostos---", "\n");

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30000.0; //emCentavos
const baseIRPF = 28559.7;

if (aposentada === true || portadoraDeDoenca === true) {
  console.log("ISENTA");
} else if (totalDeRendimentos <= baseIRPF) {
  console.log("VAZA LEAO -que não é da barra-! JA TA DIFICIL SEM VOCE");
} else {
  console.log("PEGA LEAO, HHAAAUUUU");
}