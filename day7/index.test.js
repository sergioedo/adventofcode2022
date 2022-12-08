import { expect, test } from 'vitest'
import { parseDirectories, sumDirectoriesByMaxSize, dirSizeToDelete } from 'day7'
import fs from 'fs'
import path from 'path'

test('Test parseDirectories with input sample', () => {
    const inputFile = path.join('day7', 'input.sample.txt')
    const expectedOutput = {
        "/": 48381165,
        "/a": 94853,
        "/a/e": 584,
        "/d": 24933642
    }
    expect(JSON.stringify(parseDirectories(inputFile), null, 4))
        .toBe(JSON.stringify(expectedOutput, null, 4))
})

test('Test sumDirectoriesByMaxSize with input sample', () => {
    const inputFile = path.join('day7', 'input.sample.txt')

    expect(sumDirectoriesByMaxSize(inputFile)).toBe(95437)
})

test('Test sumDirectoriesByMaxSize with input', () => {
    const inputFile = path.join('day7', 'input.txt')

    expect(sumDirectoriesByMaxSize(inputFile)).toBe(1611443)
})

test('Test dirSizeToDelete with input sample', () => {
    const inputFile = path.join('day7', 'input.sample.txt')

    expect(dirSizeToDelete(inputFile, 70000000, 30000000)).toBe(24933642)
})

test('Test dirSizeToDelete with input', () => {
    const inputFile = path.join('day7', 'input.txt')

    expect(dirSizeToDelete(inputFile, 70000000, 30000000)).toBe(2086088)
})