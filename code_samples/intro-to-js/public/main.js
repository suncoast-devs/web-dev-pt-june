let counter = 99

const pageLoad = () => {
  // set the text of the h1 to the value of counter
  document.querySelector('h1').textContent = counter
}

const addOneToCount = () => {
  console.log('add 1 to a counter')
  // get current value of the counter
  // add 1 to counter
  counter = counter + 1
  console.log(counter)
  // update the HTML
  // hey DOM, find the h1, updates the content
  document.querySelector('h1').textContent = counter
}

const subtractOneFromCounter = () => {
  counter = counter - 1
  document.querySelector('h1').textContent = counter
}

const updateName = () => {
  console.log('updating name')
  // get the value of the text
  const newName = document.querySelector('.name-input').value
  // update the name in the HTML
  document.querySelector('.name').textContent = newName
  // clear out the input field of the its old value
  document.querySelector('.name-input').value = ''
}

// Find the buttons, when you are clicked, do this thing
document
  .querySelector('.add-one-button')
  .addEventListener('click', addOneToCount)
// find the button, when its clicked, do the thing
document
  .querySelector('.subtract-one-button')
  .addEventListener('click', subtractOneFromCounter)

document.querySelector('.name-input').addEventListener('blur', updateName)

document.addEventListener('DOMContentLoaded', pageLoad)
