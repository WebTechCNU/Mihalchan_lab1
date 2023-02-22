function calculate1() {
  let number = document.getElementById("number").value;
  let digits = number.toString().split("");
  let sum = 0;
  let product = 1;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
    product *= parseInt(digits[i]);
  }
  document.getElementById("result1").innerHTML = "Сума цифр числа = " + sum + "<br>Добуток цифр числа = " + product;
}

function calculate2() {
  let text = document.getElementById("text").value;
  let words = text.split(" ");
  let count = words.length;
  document.getElementById("result2").innerHTML = "Кількість слів у тексті: " + count;
}

function convert() {
  let inputValue = document.getElementById("inputValue").value;
  let inputUnit = document.getElementById("inputUnit").value;
  let outputUnit = document.getElementById("outputUnit").value;
  let outputValue;

  switch (inputUnit) {
    case "byte":
      outputValue = inputValue;
      break;
    case "kilobyte":
      outputValue = inputValue * 1024;
      break;
    case "megabyte":
      outputValue = inputValue * 1048576;
      break;
    case "gigabyte":
      outputValue = inputValue * 1073741824;
      break;
    case "terabyte":
      outputValue = inputValue * 1099511627776;
      break;
    default:
      outputValue = 0;
      break;
  }

  switch (outputUnit) {
    case "byte":
      outputValue = outputValue;
      break;
    case "kilobyte":
      outputValue = outputValue / 1024;
      break;
    case "megabyte":
      outputValue = outputValue / 1048576;
      break;
    case "gigabyte":
      outputValue = outputValue / 1073741824;
      break;
    case "terabyte":
      outputValue = outputValue / 1099511627776;
      break;
    default:
      outputValue = 0;
      break;
  }
  document.getElementById("outputValue").value = outputValue;
}