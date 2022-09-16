function Converter() {
  var valorElemento = document.getElementById("valor"); // valor é o id do <input>
  var valor = valorElemento.value; // aqui se usa o .value para que retorne apenar o valor inserido no input, que vem sempre em texto POR PADRÃO!
  var valorEmReal = parseFloat(valor); // transformação do valor de string para float
  
  var valorEmDolar = valorEmReal * 5.26 // a conversão em dolar
    console.log(valorEmDolar);
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "o valor em dolar é $ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
  event.preventDefault()
}