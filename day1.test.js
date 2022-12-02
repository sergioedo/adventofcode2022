import { expect, test } from 'vitest'
import { maxElfCalories, top3ElfCalories } from 'day1'
import fs from 'fs'

test('Test maxElfCalories sample input', () => {
    const inputFile = 'day1.input.sample.txt'
    const expectedOutput = 24000

    expect(maxElfCalories(inputFile)).toBe(expectedOutput)
})

test('Test maxElfCalories input', () => {
    const inputFile = 'day1.input.txt'
    const expectedOutput = 69836

    expect(maxElfCalories(inputFile)).toBe(expectedOutput)
})

test('Test top3ElfCalories sample input', () => {
    const inputFile = 'day1.input.sample.txt'
    const expectedOutput = 45000

    expect(top3ElfCalories(inputFile)).toBe(expectedOutput)
})

test('Test top3ElfCalories sample', () => {
    const inputFile = 'day1.input.txt'
    const expectedOutput = 0

    expect(top3ElfCalories(inputFile)).toBe(expectedOutput)
})