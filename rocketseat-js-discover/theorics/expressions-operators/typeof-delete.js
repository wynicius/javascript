/*
    Unary Operators 
    typeof
    delete
*/
/*
    Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.  
*/

// Exemplos de uso:

// TYPEOF
    //Aqui vemos qual o tipo de dado que temos, nesse caso uma string.
console.log('It is a type of ' + typeof 'Wynicius')

// DELETE
    //Nesse caso estamos deletando a propriedade age do objeto person.
const person = {
    name:'Wynicius',
    age: 25,
}

delete person.age
console.log(person)