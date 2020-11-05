/* DOM Document Object Model  (Estructura de árbol)
  -Es un estandar de W3C (Word Wide Web Consortium) de como:
    * obtener, cambiar, agregar o eliminar elementos HTML

  -Los métodos DOM son acciones que se pueden realizar
  -Las Propiedades DOM son valores que se pueden establecer o cambiar
  ! En el DOM, todos los elementos se definen como OBJETOS
*/

/* Intro */
console.log(document.title)
document.title = 'DOM'

/* Methods DOM
  -Acceder a los tags:
    1- By ID
    2- by class
    3- By tagName
    4- querySelector:
    documents.querySelector("p")
*/

var h1ByTagName = document.getElementsByTagName('h1')
console.log(h1ByTagName)

h1ByTagName[0].innerHTML = 'Notas de Naomi Lopez'

var sectionById = document.getElementById('notes')
console.log(sectionById)

var h1ByClass = document.getElementsByClassName('h1')
console.log(h1ByClass)

var button = document.getElementsByClassName('button')

var isClick = false

const clickMe = () => {
  isClick = !isClick
  button[0].innerHTML = isClick ? 'Presioname' : 'Me presiono'
}

button[0].addEventListener('click', clickMe)
