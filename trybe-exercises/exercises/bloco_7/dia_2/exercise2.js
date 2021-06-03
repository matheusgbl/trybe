const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const newTurn = (obj, key, value) => {
  obj[key] = value;
};

newTurn(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj);

const objectLength = (obj) => Object.keys(obj).length;

const objectValues = (obj) => Object.values(obj);

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

const getStudents = (obj) => {
  let total = 0;
  const students = Object.keys(obj);
  for (index in students) {
    total += obj[students[index]].numeroEstudantes;
  }

  return total;
}

const getValueByNumber = (obj, number) => Object.values(obj)[number];
