var numeroSortido = parseInt(Math.random() * 11)

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value)
    var msgResultado = document.getElementById("msgResultado")
    if (chute == numeroSortido) {
        msgResultado.innerHTML = "Você Acertou e ganhou U$1.000.000!!!"
    } else if (chute>10 || chute<0) {
        msgResultado.innerHTML = "Opps... Você digitou um número não permitido!"
    } else {
        msgResultado.innerHTML = "Você errou, o número certo era " + numeroSortido + "... mas vamos lá, atualize a página e tente novamente!"
    }
    event.preventDefault()
}
