import fs from 'fs'

export const sumSignalsStrength = (inputFile, sumCycles) => {
    const instructions = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    let x = 1
    const cycles = []
    instructions.map(instruction => {
        const operation = instruction.split(' ')[0]
        if (operation === 'noop') {
            cycles.push(x)
        } else if (operation === 'addx') {
            const addValue = Number(instruction.split(' ')[1])
            cycles.push(x)
            cycles.push(x)
            x += addValue
        }
    })

    return sumCycles.reduce((prev, curr) => {
        const currentStrength = curr * cycles[curr - 1]
        return prev + currentStrength
    }, 0)
}