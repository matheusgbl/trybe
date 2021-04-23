let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for (let i = 0; i < numeros.length; i += 1) {
  media += numeros[i];
};

media = media / numeros.length;

if (media > 20) {
  console.log("valor maior que 20.");
} else {
  console.log("valor menor ou igual a 20.");
}