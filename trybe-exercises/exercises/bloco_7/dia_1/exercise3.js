const returnFactorialNumber = number => number > 1 
  ? number * returnFactorialNumber(number - 1) : 1;

console.log(returnFactorialNumber(4))