/*
    Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.
*/

    let word = "PaRalelePÍpedo"
    console.log(word.length)

    let number = 123415648
    console.log(String(number).length)


/*
    Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. 
    
    Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ",").
*/

    let decimal = 345.6255166
    console.log(decimal.toFixed(2).replace("." , ","))

//O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

    console.log(Number(decimal.toFixed(2).replace("." , ",")))

/*
    UPPER CASES e lower cases
        Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.
*/

    console.log(word.toLowerCase())
    console.log(word.toUpperCase())

/*
    SEPARATING  STRINGS
        Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. 

        Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.
*/
    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ")
    console.log(myArray)

    let phraseWithUnderline = myArray.join("_")
    console.log(phraseWithUnderline)

/*
    VERIFY IF THE TEXT CONTAINS THE WORD "AMOR"
        Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.
*/
    console.log(phrase.includes("Amor"))
    console.log(phrase.includes("amor"))

/*
    CREATE ARRAY WITH CONSTRUCTOR
        Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: 
            const array = new Array("a", "b", "c"), o que, sem o método construtor, seria:
            const array = ['a','b','c'].
*/
    let myArrayConstructor = new Array('a', 'b', 'c')
    console.log(myArrayConstructor)

/*
    COUNTING ELEMENTS IN ARRAYS
        Contar elementos de um array
        Para contar a quantidade de elementos em um array pode-se usar o método length.
*/
    console.log(myArrayConstructor.length)

/*
    TRANSFORM A CHAIN OF CHARACTERS IN ELEMENTS OF A ARRAY
        Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").
*/
    let aWord = "manipulation"
    console.log((Array.from(aWord)))