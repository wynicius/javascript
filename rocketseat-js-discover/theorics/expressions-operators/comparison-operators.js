// Operadores de Comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

    // ==      igual a 
    // !=      diferente de
    //      '-> Referenciam somente ao atributo em comparação

console.log(one != two)   //true
console.log(one != 1)    //false
console.log(one != "1") //false

    // ===     estritamente igual a
    // !==     estritamente diferente de 

    //     '-> Referenciam ao atributo e ao tipo de dado (string, number, boolean, ...)

console.log( two !== "2")
console.log( two !== 2)

    // >       Maior do que
console.log(one > two)

    // >=      Maior ou igual a
console.log(one >= 1)
console.log(two >= 1)

    // <       Menor do que
console.log(one < two)

    // <=      Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
