// Estrutura de Repetição
// for
// continue - pula a execução do momento
// break - para a execução do loop
// for (inicialização de uma variável; condição de continuação para o loop; expressão final)

/*
for (let i = 10; i > 0; i--) {
    console.log(i)
}
*/

/*
for (let x = 10; x >= 0; x--) {
    if(x===5){
        continue
    }
    console.log(x)
}
*/

let a = 0
for (let y = 2022; y > 0 ; y-- , a++) {
    if (y === 1997) {
        break
    }
}
console.log(`you are ${a} years old`)
