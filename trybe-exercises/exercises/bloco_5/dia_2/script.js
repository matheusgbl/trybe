// PARTE 1

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

const elementRightDiv = document.createElement('div');
elementRightDiv.className = 'right-content';
elementMainDiv.appendChild(elementRightDiv);

const elementImage = document.createElement('img');
elementImage.src = 'https://picsum.photos/200'
elementImage.className = 'small-image';
elementLeftDiv.appendChild(elementImage);

const elementUnorderedList = document.createElement('ul');
let array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete',
'Oito', 'Nove', 'Dez'];
for (let num in array) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = array[num];
  elementUnorderedList.appendChild(elementLi);
}
elementRightDiv.appendChild(elementUnorderedList);

for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Brabo ' + index;
  elementMainDiv.appendChild(elementH3);
}

// PARTE 2
elementH1.className = 'title';

const h3Elements = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  h3Elements[index].className = 'description';
}

const divLeftContent = document.getElementsByClassName('left-content')[0];
elementMainDiv.removeChild(divLeftContent);

const divRightContent = document.getElementsByClassName('right-content')[0];
divRightContent.style.margin = 'auto';

const divCenterContent = document.getElementsByClassName('center-content')[0];
divCenterContent.style.backgroundColor = 'green';

elementUnorderedList.lastChild.remove();
elementUnorderedList.lastChild.remove();
