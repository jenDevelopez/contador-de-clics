const decButton = document.querySelector('#decrease')
const resetButton = document.querySelector('#reset')
const incButton = document.querySelector('#increment')
const number = document.querySelector('.number')
let span = document.querySelector('.number>span')
let count = 0;

incButton.addEventListener('click',() => {
  count++
  span.innerText = count
})
decButton.addEventListener('click',() => {
  count--
  span.innerText = count
})
resetButton.addEventListener('click',() => {
  span.innerHTML = 0
})
console.log(count)


