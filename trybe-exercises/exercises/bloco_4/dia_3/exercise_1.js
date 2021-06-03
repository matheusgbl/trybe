let n = 5;

for (let index = 0; index < n; index += 1) {
  let asterisco = '';

  for (let linha = 0; linha < n; linha += 1) {
    asterisco = asterisco + '*';
  }
  console.log(asterisco);
}