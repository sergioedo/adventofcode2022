import fs from 'fs'

const scoreByOption = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

const scoreByResult = {
    'X': {
        'A': 3,
        'B': 0,
        'C': 6,
    },
    'Y': {
        'A': 6,
        'B': 3,
        'C': 0,
    },
    'Z': {
        'A': 0,
        'B': 6,
        'C': 3,
    }
}

const scoreByRound = (opponent, me) => {
    return scoreByOption[me] + scoreByResult[me][opponent]
}

export const totalScore = (inputFile) => {
    const strategy = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
        .map(row => row.split(' '))
    const score = strategy.map(round => scoreByRound(round[0], round[1]))
        .reduce((prev, curr) => prev + curr, 0)
    return score

}