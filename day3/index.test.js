import { expect, test } from 'vitest'
import { sumPriorities, sumGroupPriorities } from 'day3'
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

test('Test sumGroupPriorities with sample input', () => {
    const inputFile = path.join('day3', 'input.sample.txt')
    const expectedOutput = 70

    expect(sumGroupPriorities(inputFile)).toBe(expectedOutput)
})

test('Test sumGroupPriorities with input', () => {
    const inputFile = path.join('day3', 'input.txt')
    const expectedOutput = 2639

    expect(sumGroupPriorities(inputFile)).toBe(expectedOutput)
})