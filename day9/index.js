import fs from 'fs'

const moveHead = (position, direction) => {
    if (direction === 'U') return { ...position, y: position.y + 1 }
    if (direction === 'D') return { ...position, y: position.y - 1 }
    if (direction === 'L') return { ...position, x: position.x - 1 }
    if (direction === 'R') return { ...position, x: position.x + 1 }
}

const moveTail = (headPosition, tailPosition) => {
    const diffX = headPosition.x - tailPosition.x
    const diffY = headPosition.y - tailPosition.y
    const distX = Math.abs(diffX)
    const distY = Math.abs(diffY)
    const dirX = diffX > 0 ? 1 : diffX < 0 ? -1 : 0
    const dirY = diffY > 0 ? 1 : diffY < 0 ? -1 : 0

    if (distX > 1 || distY > 1) {
        return {
            x: tailPosition.x + dirX,
            y: tailPosition.y + dirY
        }
    }
    return tailPosition
}

export const countTailPositions = (inputFile, numKnots = 2) => {
    const headMoves = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    const knots = []
    for (let i = 0; i < numKnots; i++) {
        knots.push({ x: 0, y: 0 }) //start position for each knot 
    }
    const tailPositions = ['0-0']
    headMoves.map(move => {
        const direction = move.split(' ')[0]
        const steps = Number(move.split(' ')[1])
        for (let step = 0; step < steps; step++) {
            for (let i = 0; i < numKnots - 1; i++) {
                let headPosition = knots[i]
                let tailPosition = knots[i + 1]

                if (i === 0) headPosition = moveHead(headPosition, direction)
                tailPosition = moveTail(headPosition, tailPosition)

                knots[i] = headPosition
                knots[i + 1] = tailPosition

                if (i === numKnots - 2) tailPositions.push(`${tailPosition.x}-${tailPosition.y}`)
            }
        }
    })
    const uniqueTailPositions = [...new Set(tailPositions)];
    return uniqueTailPositions.length
}