export const getTurnAngle = (
    itemNumber: number,
    activeNumber: number,
    itemsCount: number
) => {
    const angleStep = 1 / itemsCount
    const isCountEven = itemsCount % 2 === 0
    const startAngle = isCountEven ? angleStep / 2 : 0.125
    const displacementAngle = angleStep * (itemNumber - 1)
    const circleTurnAngle = angleStep * (activeNumber - 1)
    const turnAngle = startAngle + displacementAngle - circleTurnAngle
    return turnAngle
}
