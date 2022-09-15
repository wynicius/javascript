var nome = "guilherme"
var notaDoPrimeiroBimestre = 9.51
var notaDoSegundoBimestre = 5.84
var notaDoPrimeiroTrimestre = 7.24
var notaDoSegundoTrimestre = 6.61

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoPrimeiroTrimestre + notaDoSegundoTrimestre) /4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo, " + nome)
console.log(notaFixada)

console.log("A nota do segundo semestre foi " + notaDoSegundoBimestre.toFixed(1))

//Isto é um comentário