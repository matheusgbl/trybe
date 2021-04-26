let n = 5;
let linha = '';

let meioDoTiangulo = (n + 1) / 2;
let controleEsq = meioDoTiangulo;
let controleDir = meioDoTiangulo;

for (let indexLinha = 0; indexLinha <= meioDoTiangulo; indexLinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna > controleEsq && indexColuna < controleDir) {
      linha = linha + '*';
    } else {
      linha = linha + ' ';
    }
  }

  console.log(linha);
  linha = '';
  controleDir += 1;
  controleEsq -= 1;
}