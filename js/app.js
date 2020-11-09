/* Seleccionar forma sencilla:
    documents.querySelector("#id")
    documents.querySelector(".class")
    documents.querySelector("tag")
*/

/*
  1-escuchar el evento click
  2-concatenar
  3- convertir a entero cuando se presione una operación
  4-Escuchar boton C
*/

const buttonNumber = document.getElementsByName('number')
const buttonOperator = document.getElementsByName('operator')
const buttonEqual = document.getElementsByName('equal')[0]
const buttonDelete = document.getElementsByName('delete')[0]

var result = document.querySelector('#result')
var currentNumber = ''
var previousNumber = ''
var operationResult = undefined

/* funcionalidad */
const updateDisplay = () => {
  result.value = currentNumber
}

const addNumber = (number) => {
  currentNumber = currentNumber.toString() + number.toString()
  updateDisplay()
}

const doOperation = () => {
  var calcResult
  const previous = parseFloat(previousNumber)
  const current = parseFloat(currentNumber)
  if (isNaN(previous) || isNaN(current)) return
  switch (operationResult) {
    case '+':
      calcResult = previous + current
      break
    case '-':
      calcResult = previous - current
      break
    case 'x':
      calcResult = previous * current
      break
    case '/':
      calcResult = previous / current
      break
    default:return
  }
  currentNumber = calcResult
  operationResult = undefined
  previousNumber = ''
}

const addOperation = (operator) => {
  if (currentNumber === '') return
  doOperation()
  operationResult = operator
  previousNumber = currentNumber
  currentNumber = ''
}

const deleteAll = () => {
  currentNumber = ''
  previousNumber = ''
  operationResult = undefined
}

/* Agregando evento a elementos del DOM */
buttonNumber.forEach(button => {
  button.addEventListener('click', () => {
    addNumber(button.value)
  })
})

buttonOperator.forEach(button => {
  button.addEventListener('click', () => {
    addOperation(button.value)
  })
})

buttonEqual.addEventListener('click', () => {
  doOperation()
  updateDisplay()
  deleteAll()
})

buttonDelete.addEventListener('click', () => {
  deleteAll()
  updateDisplay()
})
