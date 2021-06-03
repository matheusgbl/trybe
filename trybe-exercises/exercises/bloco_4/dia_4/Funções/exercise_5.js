function maisRepete(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if(num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let repetido = 0;
  let numero = 0;
  for (let props in num) {
    if (repetido < num[props]) {
      repetido = num[props];
      numero = props;
    }
  }

  return numero;
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));