import { expect, test } from 'vitest'
import { loadStacks, rearrangeStacks, rearrangeStacksNewVersion } from 'day5'
import path from 'path'


test('Test loadStacks with input sample', () => {
    const inputFile = path.join('day5', 'input.sample.txt')
    const expectedOutput = [
        ['Z', 'N'],
        ['M', 'C', 'D'],
        ['P']
    ]

    expect(JSON.stringify(loadStacks(inputFile))).toBe(JSON.stringify(expectedOutput))
})

test('Test rearrangeStacks with input sample', () => {
    const inputFile = path.join('day5', 'input.sample.txt')
    const expectedOutput = 'CMZ'

    expect(rearrangeStacks(inputFile)).toBe(expectedOutput)
})

test('Test rearrangeStacks with input', () => {
    const inputFile = path.join('day5', 'input.txt')
    const expectedOutput = 'FJSRQCFTN'

    expect(rearrangeStacks(inputFile)).toBe(expectedOutput)
})

test('Test rearrangeStacksNewVersion with input sample', () => {
    const inputFile = path.join('day5', 'input.sample.txt')
    const expectedOutput = 'MCD'

    expect(rearrangeStacksNewVersion(inputFile)).toBe(expectedOutput)
})

test('Test rearrangeStacksNewVersion with input', () => {
    const inputFile = path.join('day5', 'input.txt')
    const expectedOutput = 'CJVLJQPHS'

    expect(rearrangeStacksNewVersion(inputFile)).toBe(expectedOutput)
})