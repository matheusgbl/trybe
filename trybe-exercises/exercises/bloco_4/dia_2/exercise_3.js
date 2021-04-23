let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numeros.length; i += 1) {
  soma += numeros[i];
};

let media = soma / numeros.length;

console.log(media);
