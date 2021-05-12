document.getElementById('calculate').addEventListener('click', multiply)
let answer = 0
let counter = 0
function multiply () {
   num1 = parseInt(document.getElementById('numb1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  for (counter = 0; counter < numb1; counter++) {
    answer = answer + num2
  } document.getElementById('answer').innerHTML = answer
}
