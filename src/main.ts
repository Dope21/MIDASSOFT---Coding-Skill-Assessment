function findNearestStation(stations: number[], shops: number): number {
  return stations.reduce((prev, curr) =>
    Math.abs(curr - shops) < Math.abs(prev - shops) ? curr : prev
  )
}

function minEnergy(start: number, shops: number[], stations: number[], target: number): number {

  let currPosition = start
  let energy = 0

  shops.forEach(shopPosition => {
    const walkToShop = Math.abs(currPosition - shopPosition)
    const lastStation = Math.abs(findNearestStation(stations, shopPosition) - shopPosition)
    const firstStation = Math.abs(findNearestStation(stations, currPosition) - currPosition)

    if (walkToShop > firstStation + lastStation) {
      energy += firstStation + lastStation
    } else {
      energy += walkToShop
    }

    currPosition = shopPosition
  })

  energy += Math.abs(currPosition - target)

  return energy
}

console.log(minEnergy(2, [4,9], [3,6,8], 7))