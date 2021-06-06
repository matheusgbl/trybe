const compareNumber = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const generateNumber = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, generateNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(2, compareNumber));