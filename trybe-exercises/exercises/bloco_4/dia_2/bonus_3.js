let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novosNumeros = [];

for (let i = 0; i < numeros.length; i++) {
  if (i + 1 < numeros.length) {
    novosNumeros.push(numeros[i] * numeros[i + 1]);
  } else {
    novosNumeros.push(numeros[i] * 2);
  }
}

console.log(novosNumeros);