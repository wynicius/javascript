/*
    Function() constructor

    * expressão new -> retorna um objeto
    * criar um novo objeto
    * this keyword
*/

function Person (name) {
    this.name = name
    this.kickingAsses = function() {
        return this.name + " is kicking asses since " + this.birthDate
    }
    this.birthDate = "08-29-1997"
}  

const wynicius = new Person("Wynicius")

console.log(wynicius)
console.log(wynicius.name)
console.log(`${wynicius.kickingAsses()}`)


//other constructor functions

let date = new Date("29-08-1997")
console.log(Date)

let nameCount = new String('Wynicius')
console.log(nameCount)