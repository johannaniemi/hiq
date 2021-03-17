let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }


window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'f': //up
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'b': //down
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'l': //left
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'r': //right 
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break


  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}