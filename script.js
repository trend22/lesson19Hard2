const cat = document.querySelector('#moveCat')
const startStopCatBtn = document.querySelector('#startStopCat')
const resetCatBtn = document.querySelector('#resetCat')

let count = 0
let idInterval
let active = false

const animationModal = () => {
  idInterval = requestAnimationFrame(animationModal)

  count += 10

  if (count < window.screen.availWidth - 100) {
    cat.style.left = count * 1 + 'px'
  } else {
    cancelAnimationFrame(idInterval)
  }

  if (!active) {
    cancelAnimationFrame(idInterval)
  }
}

const resetCat = () => {
  count = 0
  cat.style.left = '10px'
}

startStopCatBtn.addEventListener('click', () => {
  active = !active
  animationModal()
})

resetCatBtn.addEventListener('click', resetCat)
