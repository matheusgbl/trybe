let anguloA = 60;
let anguloB = 60;
let anguloC = 60;

let somaDosAngulos = anguloA + anguloB + anguloC;

let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todosAngulosPositivos) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  return console.log('Erro');
}