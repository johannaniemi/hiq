const GRID_SIZE = 21

//functionen som håller koden för att se om bilen kör in i väggen
export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}