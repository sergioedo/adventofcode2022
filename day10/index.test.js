import { expect, test } from 'vitest'
import { sumSignalsStrength, drawCRT } from 'day10'
import path from 'path'

test('Test sumSignalsStrength with input sample', () => {
    const inputFile = path.join('day10', 'input.sample.txt')

    expect(sumSignalsStrength(inputFile, [20, 60, 100, 140, 180, 220])).toBe(13140)
})

test('Test sumSignalsStrength with input', () => {
    const inputFile = path.join('day10', 'input.txt')

    expect(sumSignalsStrength(inputFile, [20, 60, 100, 140, 180, 220])).toBe(11780)
})

test('Test drawCRT with input sample', () => {
    const inputFile = path.join('day10', 'input.sample.txt')
    const outputCRT = [
        '##..##..##..##..##..##..##..##..##..##..',
        '###...###...###...###...###...###...###.',
        '####....####....####....####....####....',
        '#####.....#####.....#####.....#####.....',
        '######......######......######......####',
        '#######.......#######.......#######.....'
    ]

    expect(drawCRT(inputFile)).toStrictEqual(outputCRT)
})

test('Test drawCRT with input', () => {
    const inputFile = path.join('day10', 'input.txt')
    const outputCRT = [
        "###..####.#..#.#....###...##..#..#..##..",
        "#..#....#.#..#.#....#..#.#..#.#..#.#..#.",
        "#..#...#..#..#.#....###..#..#.#..#.#..#.",
        "###...#...#..#.#....#..#.####.#..#.####.",
        "#....#....#..#.#....#..#.#..#.#..#.#..#.",
        "#....####..##..####.###..#..#..##..#..#.",
    ]

    expect(drawCRT(inputFile)).toStrictEqual(outputCRT)
})