let result = document.getElementById("result");

function clearResult() {
  result.value = " ";
}

function calculate(value) {
  result.value += value;
}

function getResult() {
  let expression = result.value;
  if (expression) {
    result.value = eval(expression);
  }
}