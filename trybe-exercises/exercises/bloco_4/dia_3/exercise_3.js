let n = 5;
let linha = '';
let posicaoN = n;

for (let index = 0; index < n; index += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < posicaoN) {
      linha = linha + ' ';
    } else {
      linha = linha + '*';
    }
  }

  console.log(linha);
  linha = '';
  posicaoN -= 1;
}