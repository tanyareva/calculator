
(function () {

let states = {
  firstOperInput: 1,
  secondOperInpute: 2,
  displayResult: 3
}

 let currentState = states.firstOperInput;

 let firstOperand = 0;
 let secondOperand = 0;
 let operation;

 function init() {

   function initNambers(id) {
     let button = document.getElementById(id);
     button.onclick = onButtonClick;
   }

   initNambers('1');
   initNambers('2');
   initNambers('3');
   initNambers('4');
   initNambers('5');
   initNambers('6');
   initNambers('7');
   initNambers('8');
   initNambers('9');
   initNambers('0');

   document.getElementById('+').onclick = onOperation;
   document.getElementById('-').onclick = onOperation;
   document.getElementById('*').onclick = onOperation;
   document.getElementById('/').onclick = onOperation;

   document.getElementById('C').onclick = onCansel;
   document.getElementById('=').onclick = onResult;
 }
 init();

 function onButtonClick(event) {
   if (currentState === states.firstOperInput){
     firstOperand = firstOperand * 10;
     firstOperand += +event.target.innerText;
     document.getElementById('display').innerText = firstOperand;
   }
   if (currentState === states.secondOperInput){
     secondOperand = secondOperand * 10;
     secondOperand += +event.target.innerText;
     document.getElementById('display').innerText = secondOperand;
   }
 }

 function onOperation(event) {
   if (currentState === states.firstOperInput) {
     operation = event.target.innerText;
     currentState = states.secondOperInput;
   }
 }

 function onCansel() {
   currentState = states.firstOperInput;
   document.getElementById('display').innerText = 0;

   firstOperand = 0;
   secondOperand = 0;
   operation = null;
 }

  function onResult() {
    if (currentState === states.secondOperInput) {
      let result = 0;
      if (operation === '+')
        result = firstOperand + secondOperand;
      else if (operation === '-')
        result = firstOperand - secondOperand;
      else if (operation === '*')
        result = firstOperand * secondOperand;
      else
        result = firstOperand / secondOperand;

      document.getElementById('display').innerText = result;
      currentState = states.firstOperInput;
      firstOperand = 0;
      secondOperand = 0;
      operation = null;
    }
  }
})()
