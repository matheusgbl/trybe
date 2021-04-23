let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numeros.length; i += 1) {
  if (numeros[i] % 2 !== 0) {
    resultado += 1;
  }
}

if (resultado === 0) {
  console.log('nenhum valor ímpar encontrado.');
} else {
  console.log(resultado);
}