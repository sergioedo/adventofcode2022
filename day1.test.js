import { expect, test } from 'vitest'
import { maxElfCalories } from 'day1'
import fs from 'fs'

test('Test sample input', () => {
    const inputFile = 'day1.input.sample.txt'
    const expectedOutput = 24000

    expect(maxElfCalories(inputFile)).toBe(expectedOutput)
})