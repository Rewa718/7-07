document.getElementById('calculate').addEventListener('click', multiply)
let answer = 0
let counter = 0
function multiply () {
  const num1 = parseInt(document.getElementById('number1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  for (counter = 0; counter < number1; counter++) {
    answer = answer + num2
  } document.getElementById('answer').innerHTML = answer
  }
