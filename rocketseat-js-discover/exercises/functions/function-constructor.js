/*
    Functions() constructor

    * expressão new -> retorna um objeto
    * criar um novo objeto
    * this keyword
*/

function Person (name) {
    this.name = name
}  

const wynicius = new Person("Wynicius")
const joao = new Person ("João")

console.log(wynicius)

//other constructor functions

let date = new Date("29-08-1997")
console.log(Date)