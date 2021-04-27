function verificaPalindromo(palavra) {
  let letras = palavra.split('');
  let ePalindromo = true;
  for(let index in letras) {
    if (letras[index] != palavra[(palavra.lenght -1 ) - index]) {
      ePalindromo = false;
    }
  }

  return ePalindromo;
}

function verificaPalindromo(string) {
  let reverso = string.split('').reverse().join('');
  if (reverso === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('ovo'));
console.log(verificaPalindromo('desenvolvimento'));