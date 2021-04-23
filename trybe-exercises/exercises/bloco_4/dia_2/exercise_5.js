let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numeros[9];

for (let i = 1; i < numeros.length; i += 1) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(maiorNumero);