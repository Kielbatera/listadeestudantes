//fazer um menu com opcao de cadastrar estudantes e mostrar o resultado dos cadastrados
let students = []

let media;
let average = function calc(n1, n2) {

  media = (n1+n2)/2

  if (media >= 7) {
    return true
  } else {
    return false
  }

}

let option;
while (option != 3  ) {
  option = Number(prompt(`Digite a opção desejada: \n
    1 - Cadastrar estudante;\n
    2 - Mostrar estudantes cadastrados;\n
    3 - Sair.`))

  if (option == 1) {

    let student = { 
        nome: prompt(`Digite o nome do aluno: `),
        nota1: Number(prompt(`Digite a sua primeira nota: `)),
        nota2: Number(prompt(`Digite a sua segunda nota: `))
    }
    
    students.push(student)
  } 

  else if (option == 2) {
    if (students.length == 0) {
      alert(`Não há alunos cadastrados!`)
    } 
    else {
      for (let s in students) {

        if (average(students[s].nota1, students[s].nota2)) {
          alert(`Parabéns, ${students[s].nome}! Sua média foi ${media}`)
        } 
        else {
          alert(`Infelizmente você não passou, ${students[s].nome}, pois sua média foi ${media} \n Tente novamente!`)
        }
      }
    }
  }

} 

alert(`Tchau!`)




                













  
 /*  alert(
    `Seu nome é ${student[0].nome} \n
    Sua primeira nota foi ${student[0].nota1} \n
    Sua segunda nota foi ${student[0].nota2}`
    ) */