import { expect, test } from 'vitest'
import { findFullContainPairs, fullyContained } from 'day4'
import path from 'path'


test('Test fullyContained', () => {
    const range1 = {
        "min": 7,
        "max": 41
    }
    const range2 = {
        "min": 7,
        "max": 40
    }
    expect(fullyContained(range1, range2)).toBe(true)
})

test('Test findFullContainPairs with sample input', () => {
    const inputFile = path.join('day4', 'input.sample.txt')
    const expectedOutput = 2

    expect(findFullContainPairs(inputFile)).toBe(expectedOutput)
})

test('Test findFullContainPairs with input', () => {
    const inputFile = path.join('day4', 'input.txt')
    const expectedOutput = 644

    expect(findFullContainPairs(inputFile)).toBe(expectedOutput)
})