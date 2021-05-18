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

function validationSelect(select, name) {
  let option = getSelectedOption(select);
  let validation = inputs[name];

  if(validation.required && (!option || option.disabled)) {
    return false;
  }

  return true;
}

function validationRadio(radio, name) {
  let checked = document.querySelector(`[name=${name}]:checked`)

  if(checked === null) {
    return false;
  }

  return true;
}

let validationStrategies = {
  default: validationInput,
  date: validationDate,
  select: validationSelect,
  radio: validationRadio,
}

function validateInput(inputName) {
  let inputType = inputs[inputName].type;
  let input = document.querySelector(`[name=${inputName}]`);

  if(inputType) {
    let validationFunction = validationStrategies[inputType];
    return validationFunction(input, inputName);
  }

  return validationStrategies.default(input, inputName);
}

function renderErrorMessages(messages){
  let form = document.querySelector('#cv-form');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);

  for(let message of messages){
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

function defaultRendering(input){
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}

function radioRendering(input){
  let p = document.createElement('p');
  let name = input.getAttribute('name');
  let checked = document.querySelector(`[name=${name}]:checked`);

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}

function selectRendering(input){
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}

let renderStrategies = {
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

function renderData(){
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#cv-form');
  form.prepend(dataDiv);

  for(let name in inputs){
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);

    let element;

    if(renderStrategies[inputType]){
      element = renderStrategies[inputType](input, dataDiv)
    } else {
      element = renderStrategies.default(input, dataDiv)
    }

    dataDiv.appendChild(element);
  }
}

function validateData(){
  let validationsList = {};

  for(let inputName in inputs){
    let isValid = validateInput(inputName);
    validationsList[inputName] = isValid;
  }
  
  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }

    if(validationsList[index].message){
      counter += 1;
      messages.push(validationsList[index].message);
    }
  }

  return {
    errorQtd: counter,
    messages,
  }
}

function clearDivs(){
  let errorDivs = document.querySelectorAll('.error');

  for(div of errorDivs){
    div.remove();
  }

  let dataDiv = document.querySelector('.data');

  if(dataDiv){
    dataDiv.remove();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();

  clearDivs();
  
  if(validation.errorQtd === 0){
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos')

    renderErrorMessages(validation.messages)
  }
}

window.onload = function () {
  createStateOptions();
}