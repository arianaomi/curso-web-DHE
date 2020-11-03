/* DOM Document Object Model  (Estructura de árbol)
  -Es un estandar de W3C (Word Wide Web Consortium) de como:
    * obtener, cambiar, agregar o eliminar elementos HTML

  -Los métodos DOM son acciones que se pueden realizar
  -Las Propiedades DOM son valores qye se pueden establecer o cambiar
  ! En el DOM, todos los elementos se definen como OBJETOS
*/

/* intro */
console.log(document.title) // Mostrando titulo
document.title = 'DOM' // Manipulando elemento
console.log(document.body)

var h1 = document.h1
console.log(h1)

// /* Metodos */
// var h1ByTagName = document.getElementsByTagName('h1')
// console.log(h1ByTagName)
// h1ByTagName[0].innerHTML = 'Notas de Naomi' /* innerHTML es una propiedad */

// var button = document.getElementById('button')
// console.log(button)
// button.style.background = 'pink'
// button.style.border = 'none'

// /* Registrando un evento */
// var isClick = false
// const clickMe = () => {
//   isClick = !isClick
//   button.innerHTML = isClick ? 'Presioname' : 'Me presiono'
// }
// button.addEventListener('click', clickMe)
