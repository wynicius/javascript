// for ... in

// Cria um loop em cima de um objeto, pegando as suas propriedades e/ou valores

let person = {
    name: 'Wynicius',
    age: 25,
    weight: 92.6
}

for (let property in person) {
    console.log(person.name)
    break
}
