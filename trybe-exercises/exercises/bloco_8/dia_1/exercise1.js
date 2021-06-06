const generateEmailEmployee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { nomeCompleto: fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiz Drumond'), 
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(generateEmailEmployee));
