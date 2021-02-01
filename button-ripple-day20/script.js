const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const x = e.clienteX
    const Y = e.clienteY
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = x - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})