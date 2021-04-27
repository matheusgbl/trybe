let info = { 
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem : 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let props in info) {
  if (
    info[props] === info.recorrente &&
    info[props] === 'Sim' &&
    info2[props] === 'Sim'
  ) {
  console.log('Ambos recorrentes');
} else {
  console.log(`${info[props]} e ${info2[props]}`);
  } 
}