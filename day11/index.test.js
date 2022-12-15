import { expect, test } from 'vitest'
import { monkeyBusiness } from 'day11'
import path from 'path'

test('Test monkeyBusiness with input sample', () => {
    const inputFile = path.join('day11', 'input.sample.txt')

    expect(monkeyBusiness(inputFile)).toBe(10605)
})

test('Test monkeyBusiness with input', () => {
    const inputFile = path.join('day11', 'input.txt')

    expect(monkeyBusiness(inputFile)).toBe(55944)
})

test('Test monkeyBusiness with input sample, 10K rounds and no damage division', () => {
    const inputFile = path.join('day11', 'input.sample.txt')

    expect(monkeyBusiness(inputFile, 10000, false)).toBe(2713310158)
})

test('Test monkeyBusiness with input, 10K rounds and no damage division', () => {
    const inputFile = path.join('day11', 'input.txt')

    expect(monkeyBusiness(inputFile, 10000, false)).toBe(15117269860)
})