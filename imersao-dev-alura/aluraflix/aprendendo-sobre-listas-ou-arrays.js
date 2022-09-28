/* ANTES:
 * var filme1 = "Yesterday"
 * var filme2 = "A chegada"
 * var filme3 = "Escola de Rock"
*/

//cria-se uma lista (array), e atenção que a diferença na declaração de uma lista é declaração entre COLCHETES, ein!?

var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];

//para chamar o índice/valor específico que você quiser refira à lista com o índice específico entre colchetes!

//ATENÇÃO: OS VALORES DA LISTA COMEÇAM A SER CONTADOS EM 0 (ZER0) !!!!

// O método .push adiciona a uma lista um elemento "no meio do caminho, veja abaixo:

listaFilmes.push("Harry Potter");

/* ANTES 1:
* document.write("<p>" + f ilme2 + "</p>")
* document.write("<p>" + filme3 + "</p>")
*/
/* ANTES 2:
 * document.write("<p>" + listaFilmes[0] + "</p>");
 * document.write("<p>" + listaFilmes[1] + "</p>");
 * document.write("<p>" + listaFilmes[2] + "</p>");
 * document.write("<p>" + listaFilmes[3] + "</p>");
*/

//indice = indice + 1 | é o mesmo de que indice++

/* Função 
Para (expressão)   |    até     |     faça ...:     */ 
for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>")
}
