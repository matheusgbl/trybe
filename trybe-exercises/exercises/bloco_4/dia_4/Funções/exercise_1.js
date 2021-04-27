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