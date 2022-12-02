import { expect, test } from 'vitest'
import { totalScore } from 'day2'
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