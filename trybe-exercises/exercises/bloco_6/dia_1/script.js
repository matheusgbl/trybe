function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true,
  },
  cpf: {
    maxLength: 11,
    required: true,
  },
  addres: {
    maxLength: 200,
    required: true,
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  },
}

function validationInput(input, name) {
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if (validation.required && trimmed.length === 0) {
    return false;
  }

  if (validation.maxLength && trimmed.length > validation.maxLength) {
    return false;
  }

  return true;
}

function validationDate(input, name) {
  if(input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

  if(regex.test(input.value)) {
    return {
      message: 'Data: formato inválido!'
    };
  }

  let splitValue = input.value.split('/');
  let day = splitValue[0];
  let month = splitValue[1];
  let year = splitValue[2];

  if(day < 0 || day > 30) {
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12) {
    return {
      message: 'Mês inválido'
    };
  }

  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

function getSelectedOption(select) {
  return select.options[select.selectedIndex];
}

function selectValidation(select, name) {
  let option = getSelectedOption(select);
  let validation = inputs[name];

  if(validation.required && (!option || option.disabled)) {
    return false;
  }

  return true;
}

window.onload = function () {
  createStateOptions();
}