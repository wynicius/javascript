// Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

let celsius, fahrenheit

// Fluxo de Celsius para Fahrenheit
function CtoF() {
   celsius = document.getElementById("tempC").value;
   let tempC = parseFloat(celsius);
   let tempF = (tempC * 9/5 + 32).toFixed(0)

   let modal = document.querySelector("dialog#C")
   let elementToBeShown = document.getElementById("celsiusToF");
   let tempConverted = tempC + "°C is equivalent to " + tempF + '°F';
   elementToBeShown.innerHTML = tempConverted;
   modal.showModal()
   document.getElementById("tempC").value = ''
   event.preventDefault()
}

// Fluxo de Fahrenheit para Celsius
function FtoC() {
   fahrenheit = document.getElementById("tempF").value;
   let tempF = parseFloat(fahrenheit);
   let tempC = ((tempF - 32) * 5/9).toFixed(0)
   
   let modal = document.querySelector("dialog#F")
   let elementToBeShown = document.getElementById("fahrenheitToC");
   let tempConverted =  tempF + "°F is equivalent to " + tempC + '°C';
   elementToBeShown.innerHTML = tempConverted;
   modal.showModal()
   document.getElementById("tempF").value = ''
   event.preventDefault()
}

// Modal com tag <dialog> mostrando conversão de celsius para fahrenheit
function btnCloseC() {
   let modal = document.querySelector("dialog#C")
   modal.close()
   event.preventDefault()
}

// Modal com tag <dialog> mostrando conversão de fahrenheit para celsius
function btnCloseF() {
   let modal = document.querySelector('dialog#F')
   modal.close()
   event.preventDefault()
}
