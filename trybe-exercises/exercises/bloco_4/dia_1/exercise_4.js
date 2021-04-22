let a = 0;

function retornaInfoSobreValor() {
  if(a >= +1) {
    return "positive";
  } else if (a <= -1) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(retornaInfoSobreValor(a));