/* 
    new

    * left-hand-side expression
    * expressão que serve para criar um novo objeto
*/

// A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

// Um exemplo de seu uso é:

let name = new String('Wynicius')
let age = new Number (23)
console.log(name, age)

let date = new Date('2020-12-01')
console.log(date.__proto__)