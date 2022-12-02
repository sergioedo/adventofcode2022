import { expect, test } from 'vitest'
import { totalScore, totalScoreNewStrategy } from 'day2'
import path from 'path'

test('Test totalScore sample input', () => {
    const inputFile = path.join('day2', 'input.sample.txt')
    const expectedOutput = 15

    expect(totalScore(inputFile)).toBe(expectedOutput)
})

test('Test totalScore input', () => {
    const inputFile = path.join('day2', 'input.txt')
    const expectedOutput = 12156

    expect(totalScore(inputFile)).toBe(expectedOutput)
})

test('Test totalScore with new strategy sample input', () => {
    const inputFile = path.join('day2', 'input.sample.txt')
    const expectedOutput = 12

    expect(totalScoreNewStrategy(inputFile)).toBe(expectedOutput)
})

test('Test totalScore with new strategy sample', () => {
    const inputFile = path.join('day2', 'input.txt')
    const expectedOutput = 10835

    expect(totalScoreNewStrategy(inputFile)).toBe(expectedOutput)
})