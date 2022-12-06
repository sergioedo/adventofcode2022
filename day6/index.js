import fs, { lutimes } from 'fs'
import { start } from 'repl'

const diffChars = (word) => {
    const chars = word.split('')
    return chars.every((char, idx) => !word.substring(idx + 1).includes(char))
}

export const startIndex = (input, packLength = 4) => {
    let found = false
    let startIndex = packLength - 1 // min packLength
    while (!found && startIndex < input.length) {
        const pack = input.substring(startIndex - (packLength - 1), startIndex + 1)
        if (diffChars(pack)) {
            found = true
        } else {
            startIndex++
        }
    }
    return startIndex + 1
}

export const startPackIndex = (input) => startIndex(input, 4)

export const startPackIndexFromFile = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    return startPackIndex(input[0])
}

export const startMessageIndex = (input) => startIndex(input, 14)

export const startMessageIndexFromFile = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    return startMessageIndex(input[0])
}