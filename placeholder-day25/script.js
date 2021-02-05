const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const avatar = document.getElementById('profile_img')
const authorName = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 3500)

function getData() {
  header.innerHTML= '<img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60" alt="">'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa?'
  avatar.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="img user">'
  authorName.innerHTML = 'John Doe'
  date.innerHTML = 'Jan 08, 2021'

  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
  animatedBgText.forEach(text => text.classList.remove('animated-bg-text'))
}
