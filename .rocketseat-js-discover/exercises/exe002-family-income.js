// Desafio:

// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.


let renda
let receitas = [8000,3800] , despesas = [1500, 400, 7000, 80, 400]
rendaFamiliar(receitas, despesas)

function rendaFamiliar(receitas, despesas){
    let [ganhos, gastos] = [0 , 0]
        for(var i = 0; i < receitas.length; i++){
            ganhos += receitas[i];
        }
        for(var i = 0; i < despesas.length; i++){
            gastos += despesas[i];
        }

    renda = ganhos - gastos
    
        if (renda > 0) {
            console.log(`Oba! Sua conta está positiva, com: R$${renda} `)
        } else if (renda < 0) {
            console.log(`Que pena! Sua conta está negativa, com deficit de: -R$${renda}`)
        } else if (renda = 0) {
            console.log(`Você está sem dinheiro :(`)
        } else {
            console.log('Alguma coisa está errada')
        }
}



