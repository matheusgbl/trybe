const right_Answers = ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'D'];
const student_Answers = ['A', 'B', 'A', 'N.A', 'C', 'D', 'A', 'D'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    count += actionReturn;
  }

  return `Resultado final: ${count} corretas`;
}

console.log(repeat(right_Answers, student_Answers, (rigAnswers, stuAnswers) => {
  if (rigAnswers === stuAnswers) {
    return 1;
  } if (stuAnswers === 'N.A') {
    return 0.5
  }
  return - 0.5;
}));