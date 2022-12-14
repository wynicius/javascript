// Estrutura de Repetição
// while

// Quando a gente não sabe realmente o momento da parada, a gente usa o WHILE

/*
let i = 4959837131
while (i > 10) {
    console.log(i)

    i /= 35
}
*/

function division (i,x) {
    while( i > 2) {
        i /= 2;
        x = ++x;
        console.log(i)
    }
    console.log (`the division ends with the remainder of ${i}, the result of ${x} times the original number`)
}

division(35000, 0)