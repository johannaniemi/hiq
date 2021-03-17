import { getInputDirection } from "./input.js"

export const CAR_SPEED = 3
const carBody = [{ x: 11, y: 11 }]
let newSegments = 0

//placerar ut bilen 
export function update() {
  addSegments()

  const inputDirection = getInputDirection()
  for (let i = carBody.length - 2; i >= 0; i--) {
    carBody[i + 1] = { ...carBody[i] }
  }

  carBody[0].x += inputDirection.x
  carBody[0].y += inputDirection.y
}
//ritar ut bilen
export function draw(gameBoard) {
  carBody.forEach(segment => {
    const carElement = document.createElement('div')
    carElement.style.gridRowStart = segment.y
    carElement.style.gridColumnStart = segment.x
    carElement.classList.add('car')
    gameBoard.appendChild(carElement)
  })
}

export function expandCar(amount) {
  newSegments += amount
}

export function onCar(position, { ignoreHead = false } = {}) {
  return carBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

//håller reda på bilens front 
export function getCarHead() {
  return carBody[0]
}

export function carIntersection() {
  return onCar(carBody[0], { ignoreHead: true })
}

//lägger till bilen 
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
 
  }

  newSegments = 0
}