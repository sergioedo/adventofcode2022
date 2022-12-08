import { expect, test } from 'vitest'
import { countVisibleTree, highestTreeScore } from 'day8'
import fs from 'fs'
import path from 'path'

test('Test countVisibleTrees with input sample', () => {
    const inputFile = path.join('day8', 'input.sample.txt')

    expect(countVisibleTree(inputFile)).toBe(21)
})

test('Test countVisibleTrees with input', () => {
    const inputFile = path.join('day8', 'input.txt')

    expect(countVisibleTree(inputFile)).toBe(1851)
})

test('Test highestTreeScore with input sample', () => {
    const inputFile = path.join('day8', 'input.sample.txt')

    expect(highestTreeScore(inputFile)).toBe(8)
})

test('Test highestTreeScore with input', () => {
    const inputFile = path.join('day8', 'input.txt')

    expect(highestTreeScore(inputFile)).toBe(574080)
})