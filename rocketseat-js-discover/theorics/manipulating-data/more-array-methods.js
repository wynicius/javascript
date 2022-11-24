//Manipulating Arrays


let techs = ["html", "css", "js"]
//Existem várias maneiras de manipular arrays, como o método push(), o método unshift(), o método pop(), o método shift(), o método slice(),o método splice() e o método indexOff(), vejamos: 

//adicionar um elemento no final da array
techs.push("nodejs")
console.log(techs)
//adicionar um elemento no começo da array
techs.unshift("sql")
console.log(techs)
//retirar um elemento do final da array
techs.pop()
console.log(techs)
// retirar um elemento do começo do array
techs.shift()
console.log(techs)

// pegar somente alguns elementos do array
    // receber como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições
console.log(techs.slice(1,3))
console.log(techs.slice(1,2))

// remover 1 ou mais items em qualquer posição do array
    // receber como argumentos a posição de início e a quantidade de elementos que você quer remover
techs.splice(1,2)
console.log(techs)

// encontrar o index (a posição) do elemento que recebe como argumento em um array.
let WorldCups = ["Brazil", "Italy", "Germany", "France"]
let index = WorldCups.indexOf('Brazil')
console.log(index)



