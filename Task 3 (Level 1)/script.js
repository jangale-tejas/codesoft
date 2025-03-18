// script.js

// This function adds numbers and operators to the display screen
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// This function clears the entire display screen
function clearDisplay() {
  document.getElementById('display').value = '';
}

// This function clears the most recent digit from the display
function clearLastDigit() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);  // Remove the last character
}

// This function calculates the result based on the current input
function calculateResult() {
  let expression = document.getElementById('display').value;
  try {
    // Evaluating the expression entered by the user
    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
