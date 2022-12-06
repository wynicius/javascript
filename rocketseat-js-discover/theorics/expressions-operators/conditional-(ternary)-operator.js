// Dependendo da condição, nós receberemos valores diferentes;

// Condição entra valor 1, se não, valor 2

// Condition ? value 1 : value 2

//Exemplo: Café da manhã top!

    let bread = true;
    let cheese = true;

    const niceBreakfast = bread && cheese ? "I had such a great Breakfast!!" : "I didn't quite enjoy my breakfast"
    console.log(niceBreakfast)

    const badBreakfast = bread && !cheese ? "I had such a great Breakfast!!" : "I didn't quite enjoy my breakfast"
    console.log(badBreakfast)

// Outro exemplo: Maior de 18, Poder tirar a CNH

function Person(age,condition) {
    this.age = age
    this.healthCondition = condition
}
let wynicius = new Person(25, 'healthy')

const canDrive = (wynicius.age >= 18) && (wynicius.healthCondition == 'healthy') ? 'Wynicius is legally able to take his driver license.' : 'Wynicius is not legally able to take his driver license.'
console.log(canDrive)