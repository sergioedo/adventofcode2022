import fs, { lutimes } from 'fs'
import { start } from 'repl'

const diffChars = (word) => {
    const chars = word.split('')
    return chars.every((char, idx) => !word.substring(idx + 1).includes(char))
}

export const startPackIndex = (input) => {
    let found = false
    let startIndex = 3 // min length 4
    while (!found && startIndex < input.length) {
        const pack4 = input.substring(startIndex - 3, startIndex + 1)
        if (diffChars(pack4)) {
            found = true
        } else {
            startIndex++
        }
    }
    return startIndex + 1
}

export const startPackIndexFromFile = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    return startPackIndex(input[0])
}