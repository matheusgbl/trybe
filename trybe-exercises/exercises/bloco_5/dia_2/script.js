const elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Exercício 5.2 - JavaScript';
document.body.appendChild(elementH1);

const elementMainDiv = document.createElement('div');
elementMainDiv.className = 'main-content';
document.body.appendChild(elementMainDiv);

const elementCenterDiv = document.createElement('div');
elementCenterDiv.className = 'center-content';
elementMainDiv.appendChild(elementCenterDiv);

const elementParagraph = document.createElement('p');
elementParagraph.innerHTML = 'Alguma coisa aí.';
elementCenterDiv.appendChild(elementParagraph);

const elementLeftDiv = document.createElement('div');
elementLeftDiv.className = 'left-content';
elementMainDiv.appendChild(elementLeftDiv);