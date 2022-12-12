import fs from 'fs'

const valueCycles = (inputFile) => {
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
    return cycles
}

export const sumSignalsStrength = (inputFile, sumCycles) => {
    const cycles = valueCycles(inputFile)
    return sumCycles.reduce((prev, curr) => {
        const currentStrength = curr * cycles[curr - 1]
        return prev + currentStrength
    }, 0)
}

export const drawCRT = (inputFile) => {
    const cycles = valueCycles(inputFile)
    const crt = new Array(6)  //6 lines
    for (let cycle = 1; cycle <= cycles.length; cycle++) {
        const row = Math.floor((cycle - 1) / 40)
        const col = Math.floor((cycle - 1) % 40)
        const x = cycles[cycle - 1]
        const pixel = Math.abs(x - col) > 1 ? '.' : '#'
        crt[row] = (crt[row] || '') + pixel
    }
    return crt
}