'use strict'

const form = document.querySelector('#form')
const boxDashed = document.querySelector('#user-container')

boxDashed.style.display = 'none'

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.querySelector('#name').value
  const lastName = document.querySelector('#lastName').value
  const age = parseInt(document.querySelector('#age').value)

  if (name === '' || name.trim().length === 0) {
    document.querySelector('#nameError').innerHTML = 'Nombre invalido'
    return
  }

  boxDashed.style.display = 'block'
  const paragraphName = document.querySelector('#pName span')
  const paragraphLastName = document.querySelector('#pLastName span')
  const paragraphAge = document.querySelector('#pAge span')

  paragraphName.innerHTML = name
  paragraphLastName.innerHTML = lastName
  paragraphAge.innerHTML = age
})
