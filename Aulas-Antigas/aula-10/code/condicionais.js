// if else
const tempo = "nublado";
if (tempo === "ensolarado") {
  console.log("O tempo está ensolarado");
} else {
  console.log("O tempo está nublado");
}

// if else if
const idade = 18;
const embriagado = true;
if (idade >= 18 && !embriagado) {
  console.log("Pode dirigir");
} else if (idade >= 18 && embriagado) {
  console.log("Você não pode dirigir embriagado");
} else if (idade < 18 && !embriagado) {
  console.log("Você é de menor, não pode dirigir");
} else if (idade < 18 && embriagado) {
  console.log("Não pode dirigir nem bêbado e nem sendo de menor");
} else {
  console.log("Tem que informar uma idade");
}

// Switch
const dia = 3;

switch (dia) {
  case 1:
    console.log("Hoje é domingo");
    break;

  case 2:
    console.log("Hoje é segunda");
    break;

  case 3:
    console.log("Hoje é terça");
    break;

  case 4:
    console.log("Hoje é quarta");
    break;

  case 5:
    console.log("Hoje é quinta");
    break;

  case 6:
    console.log("Hoje é sexta");
    break;

  case 7:
    console.log("Hoje é sábado");
    break;

  default:
    console.log("Tem que informar um numero de 1 a 7");
}
