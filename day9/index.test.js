import { expect, test } from 'vitest'
import { countTailPositions } from 'day9'
import path from 'path'

test('Test countTailPositions with input sample', () => {
    const inputFile = path.join('day9', 'input.sample.txt')

    expect(countTailPositions(inputFile)).toBe(13)
})

test('Test countTailPositions with input', () => {
    const inputFile = path.join('day9', 'input.txt')

    expect(countTailPositions(inputFile)).toBe(6745)
})