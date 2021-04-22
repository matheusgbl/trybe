let a = 0;

function retornaInfoSobreValor() {
  if(a > 0) {
    return "positive";
  } else if (a < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(retornaInfoSobreValor(a));