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

const scoreByRound = (opponent, me, scoreByOption, scoreByResult) => {
    return scoreByOption[me] + scoreByResult[me][opponent]
}

export const totalScoreByFunction = (inputFile, scoreByOption, scoreByResult) => {
    const strategy = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
        .map(row => row.split(' '))
    const score = strategy.map(round => scoreByRound(round[0], round[1], scoreByOption, scoreByResult))
        .reduce((prev, curr) => prev + curr, 0)
    return score

}

export const totalScore = (inputFile) => totalScoreByFunction(inputFile, scoreByOption, scoreByResult)

const scoreByOptionPart2 = {
    'X': 0,
    'Y': 3,
    'Z': 6
}

const scoreByResultPart2 = {
    'X': {
        'A': scoreByOption['Z'],
        'B': scoreByOption['X'],
        'C': scoreByOption['Y'],
    },
    'Y': {
        'A': scoreByOption['X'],
        'B': scoreByOption['Y'],
        'C': scoreByOption['Z'],
    },
    'Z': {
        'A': scoreByOption['Y'],
        'B': scoreByOption['Z'],
        'C': scoreByOption['X'],
    }
}

export const totalScoreNewStrategy = (inputFile) => totalScoreByFunction(inputFile, scoreByOptionPart2, scoreByResultPart2)