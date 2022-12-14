// for of
// Loop para percorrer arrays

let name = 'Wynicius'
let names = ['João' , 'Paulo' , 'Pedro']
let notas = [100 , 89 , 26, 78, 94 , 56, 67, 30, 45]

// for (let char of name) {
//     console.log(char)
// }

// for ( let name of names) {
//     console.log(name)
// }

let aprovados = 0
let reprovados = 0
for ( let resultado of notas) {
    if (resultado >= 70) {
        aprovados++
    } else {
        reprovados++
    }
}
console.log(aprovados + ' alunos foram aprovados.')
console.log(reprovados + ' alunos foram reprovados.')
