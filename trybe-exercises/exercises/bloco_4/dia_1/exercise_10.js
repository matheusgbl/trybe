let custoProduto = 200;
let valorDeVenda = 300;

if (custoProduto >= 0 && valorDeVenda >= 0) {
  let custoTotalDoProduto = custoProduto * 1.2;
  let lucroTotal = (valorDeVenda - custoTotalDoProduto) * 100;
  console.log(lucroTotal);
} else {
  console.log('Erro, valores inválidos.')
}