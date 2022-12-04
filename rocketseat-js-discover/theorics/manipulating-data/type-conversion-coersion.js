/*
    Type conversion (typecasting) vs. Type coersion

    * Alteração de um tipo de dado para outro tipo.

*/

console.log('9' + 5)

// O Javascript alterou o 5, que é number, para o tipo string, sendo '5'...
        // e isto é type coersion, a linguagem facilitando para nós. Abaixo a type conversion

console.log(Number('9') + 5)
console.log('9' + String(5))
    
console.log(Boolean('false'))
console.log(Boolean())


// conversão manual, feita pelo desenvolvedor! Type Conversion (typecasting)

