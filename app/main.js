(function () {

  var states = {
    firstOperInput: 1,
    secondOperInput: 2,
    displayResult: 3
  }

  var currentState = states.firstOperInput;

  let firstOperand = 0;
  let secondOperand = 0;
  let operation;

  function init() {

    function initNumbers(id) {
      var button = document.getElementById(id);
      button.onclick = onButtonClick;
    }

    initNumbers('1');
    initNumbers('2');
    initNumbers('3');
    initNumbers('4');
    initNumbers('5');
    initNumbers('6');
    initNumbers('7');
    initNumbers('8');
    initNumbers('9');
    initNumbers('0');

    document.getElementById('+').onclick = onOperation;
    document.getElementById('-').onclick = onOperation;
    document.getElementById('*').onclick = onOperation;
    document.getElementById('/').onclick = onOperation;

    document.getElementById('C').onclick = onCancel;
    document.getElementById('=').onclick = onResult;

  }
  init();


  function onButtonClick(event) {

    if (currentState === states.firstOperInput){
      firstOperand = firstOperand * 10;
      firstOperand += +event.target.innerText;
      document.getElementById('display').innerText = firstOperand;
    }

    if (currentState === states.secondOperInput) {
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

  function onCancel() {
    currentState = states.firstOperInput;
    document.getElementById('display').innerText = '0';

    firstOperand = 0;
    secondOperand = 0;
    operation = null;
  }

  function onResult () {
    if (currentState === states.secondOperInput) {
      let result = 0;
      if (operation === '+')
        result = firstOperand + secondOperand;
      else if(operation === '-')
        result = firstOperand - secondOperand;
      else if(operation === '*')
        result = firstOperand *secondOperand;
      else
        result = firstOperand / secondOperand;

      document.getElementById('display').innerText = result;

      currentState = states.firstOperInput;
      firstOperand = 0;
      secondOperand = 0;
      operation = null;
    }
  }
})();
