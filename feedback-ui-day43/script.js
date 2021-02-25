const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const panel = document.querySelector('#panel')
const sendBtn = document.querySelector('#send')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank you!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use yor feedback to improve our customer support</p>
  `
})

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}