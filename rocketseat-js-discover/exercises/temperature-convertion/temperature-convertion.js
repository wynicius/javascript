// Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

let celsius, fahrenheit

function CtoF() {
   celsius = document.getElementById("tempC").value;
   let tempC = parseFloat(celsius);
   let tempF = (tempC * 9/5 + 32).toFixed(0)
   var elementToBeShown = document.getElementById("celsiusToF");

   var tempConverted = "The temperature right now in fahrenheit is " + tempF + '°F';
   elementToBeShown.innerHTML = tempConverted;
   event.preventDefault()
}

function FtoC() {
   fahrenheit = document.getElementById("tempF").value;
   let tempF = parseFloat(fahrenheit);
   let tempC = ((tempF - 32) * 5/9).toFixed(0)
   var elementToBeShown = document.getElementById("fahrenheitToC");

   var tempConverted = "The temperature right now in celsius is " + tempC + '°C';
   elementToBeShown.innerHTML = tempConverted;
   event.preventDefault()
}

