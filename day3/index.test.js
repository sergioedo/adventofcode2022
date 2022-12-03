import { expect, test } from 'vitest'
import { sumPriorities } from 'day3'
import path from 'path'

test('Test sumPriorities with sample input', () => {
    const inputFile = path.join('day3', 'input.sample.txt')
    const expectedOutput = 157

    expect(sumPriorities(inputFile)).toBe(expectedOutput)
})

test('Test sumPriorities with input', () => {
    const inputFile = path.join('day3', 'input.txt')
    const expectedOutput = 7811

    expect(sumPriorities(inputFile)).toBe(expectedOutput)
})