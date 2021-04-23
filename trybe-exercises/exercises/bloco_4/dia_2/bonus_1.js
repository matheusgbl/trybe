let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numeros.length; i++) {
  for (let i2 = 0; i2 < i; i2++) {
    if(numeros[i] < numeros[i2]) {
      let posicao = numeros[i];
      numeros[i] = numeros[i2];
      numeros[i2] = posicao;
    }
  }
}

console.log(numeros);