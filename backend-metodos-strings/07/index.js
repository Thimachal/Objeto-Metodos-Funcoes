console.log("----Validação de e-mail----", "\n");
const email = "aluno@cubos.academy";
if (email.slice(-1) !== ".") {
  if (email.slice(0, 1) !== ".") {
    if (email.indexOf("@", 0)) {
      console.log("Email válido! Meus Parabéns");
    } else {
      console.log("Email Inválido, errrouu");
    }
  } else {
    console.log("Email Inválido, errrouu");
  }
} else {
  console.log("Email Inválido, errrouu");
}
