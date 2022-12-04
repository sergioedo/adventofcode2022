import fs from 'fs'

export const fullyContained = (range1, range2) => {
    if (range1.min >= range2.min && range1.min <= range2.max
        && range1.max >= range2.min && range1.max <= range2.max) return true

    if (range2.min >= range1.min && range2.min <= range1.max
        && range2.max >= range1.min && range2.max <= range1.max) return true

    return false
}

export const findPairs = (inputFile, filterPairs) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
        .map(line => line.split(',')
            .map(section => ({ min: Number(section.split('-')[0]), max: Number(section.split('-')[1]) }))
        )
    const filteredPairs = input.filter(([first, second]) => {
        return filterPairs(first, second)
    })
    return filteredPairs.length
}

export const findFullContainPairs = (inputFile) => {
    return findPairs(inputFile, fullyContained)
}

export const overlappedPair = (range1, range2) => {
    if (range1.min > range2.max || range1.max < range2.min) return false
    if (range2.min > range1.max || range2.max < range1.min) return false

    return true
}

export const findOverlappedPairs = (inputFile) => {
    return findPairs(inputFile, overlappedPair)
}