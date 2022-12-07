// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

/*
    let grades = [100, 97, 54, 75, 83, 87, 40, 0, 35, 74, 63, 27, 80, 75, 70]
    let [a,b,c,d,f] = [0,0,0,0,0]

    for (let media of grades) {
        if (media >= 90) {
            a++
        } else if (media >= 80 ) {
            b++
        } else if (media >= 70 ) {  // I've created this system with imaginable grades, but that's not what was requested
            c++
        } else if (media >= 60 ) {
            d++
        } else if (media < 60 ) {
            f++
        }
    }
*/

// console.log(`Foram ${a} notas A, ${b} notas B, ${c} notas C, ${d} notas D, ${f} notas F`)

//tried again!

let grade = getGrade(parseInt(Math.random() * 111))

function getGrade (grade) {
    let gradeA = grade >= 90 && grade < 100
    let gradeB = grade >= 80 && grade <= 89
    let gradeC = grade >= 70 && grade <= 79
    let gradeD = grade >= 60 && grade <= 69
    let gradeF = grade < 60 && grade >= 0
    
    if (gradeA) {
        return finalGrade = 'A' , grade
    } else if (gradeB) {
        return finalGrade = 'B' , grade
    } else if (gradeC) {
        return finalGrade = 'C' , grade
    } else if (gradeD) {
        return finalGrade = 'D' , grade
    }  else if (gradeF) {
        return finalGrade = 'F' , grade
    } else {
        return finalGrade = 'Nota inválida.' , grade
    }
}
console.log(`You scored ${grade}, therefore, your GPA is ${finalGrade}`)
