const arrSkills = ["React", "Vue", "Node", "Docker", "React Native"];

function changeWordInPhrase (string) {
  const func1 = value => (
    `Tryber ${value} aqui!
    
    Tudo bem? `
  )

  let result = `${func1(string)}

  Minhas cinco principais skills são:`

  arrSkills.forEach((skill, index) => 
    result = `${result}
    - ${skill}`)

  result = `
    ${result}

    #goTrybe
  `

  return result;
}

console.log(changeWordInPhrase('xesquedele'));
