document.getElementById('calculate').addEventListener('click', multiply)
let answer = 0
let counter = 0
let number1 = 0
let number2 = 0
function multiply () {
  number1 = document.getElementById('num1').value
  number1 = parseInt(number1)
  number2 = document.getElementById('num2').value
  number2 = parseInt(number2)

  for (counter = 0; counter < number1; counter++) {
    answer = answer + number2
  } document.getElementById('answer').innerHTML = answer
}
