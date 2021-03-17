import { update as updateCar, draw as drawCar, CAR_SPEED, getCarHead, carIntersection } from './car.js'

import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('The car hit the wall!')) {
      window.location = '/http://users.du.se/~h18jniem/Hiq/spel/'
    }
    return
  }

  
//räknar ut vart bilen befinner sig 
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / CAR_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateCar()
   checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawCar(gameBoard)
  
}
//kollar ifall bilen har kört in i väggen
function checkDeath() {
  gameOver = outsideGrid(getCarHead()) || carIntersection()
}
