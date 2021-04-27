function retornaMaiorIndice(numeros) {
  let maiorIndice = 0;
  for(let index in numeros) {
    if (numeros[maiorIndice] > numeros[index]) {
      maiorIndice = index;
    }
  }
  return maiorIndice;
}

console.log(retornaMaiorIndice([2, 4, 6, 7, 10, 0, -3]));