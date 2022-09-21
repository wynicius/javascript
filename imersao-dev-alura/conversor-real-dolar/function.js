function Converter() {
  /* 
  * var valorElemento = document.getElementById("valor"); // valor é o id do <input>
  * var valor = valorElemento.value; // aqui se usa o .value para que retorne apenar o valor inserido no input, que vem sempre em texto POR PADRÃO!
  FAREI A TROCA DAS DUAS LINHAS POR APENAS UMA!*/
  var valor = document.getElementById("valor").value
  var valorEmReal = parseFloat(valor); // transformação do valor de string para float
  
  var valorEmDolar = (valorEmReal * 5.26).toFixed(2) // a conversão em dolar

  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Real é de R$" + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
  event.preventDefault()
}