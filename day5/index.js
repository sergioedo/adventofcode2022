import fs, { lutimes } from 'fs'

export const loadStacks = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    const endStackLine = input.findIndex(line => line.length === 0)

    const reversedStacksLines = input.filter((line, idx) => idx < endStackLine - 1).reverse()
    const numStacks = (reversedStacksLines[0].length + 1) / 4 // 3x + (x - 1) = long => 4x - 1 = long => x = (long + 1) / 4

    const stacks = Object.values(reversedStacksLines.reduce((prev, curr, idx, arr) => {
        for (let i = 0; i < numStacks; i++) {
            if (!prev[i]) prev[i] = []
            const char = curr[(4 * i) + 1]
            if (char !== ' ') prev[i].push(char)
        }
        return prev
    }, {}))

    return stacks
}

const loadInstructions = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    const endStackLine = input.findIndex(line => line.length === 0)

    return input.filter((line, idx) => idx > endStackLine)
        .map(line => {
            const parts = line.split(' ')
            return {
                count: Number(parts[1]),
                from: Number(parts[3]),
                to: Number(parts[5]),
            }
        })
}

export const rearrangeStacks = (inputFile) => {
    const stacks = loadStacks(inputFile)
    const instructions = loadInstructions(inputFile)

    instructions.map(instruction => {
        for (let i = 0; i < instruction.count; i++) {
            const crate = stacks[instruction.from - 1].pop()
            stacks[instruction.to - 1].push(crate)
        }
    })

    return stacks.map(stack => stack.slice(-1)).flat().join('')
}