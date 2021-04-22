let pecaXadrez = 'Cavalo';

switch(pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa apenas para qualquer posição.');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonal.');
    break;
  case 'peão':
    console.log('Peão -> Apenas uma casa para frente, no primeiro movimento, podem ser duas casas.');
    break;
  default:
    console.log('Erro');
    break;
};