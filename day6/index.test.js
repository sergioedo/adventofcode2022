import { expect, test } from 'vitest'
import { startPackIndex, startPackIndexFromFile, startMessageIndex, startMessageIndexFromFile } from 'day6'
import path from 'path'


test('Test startPackIndex with input sample', () => {
    expect(startPackIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7)
    expect(startPackIndex('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)
    expect(startPackIndex('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6)
    expect(startPackIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10)
    expect(startPackIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11)
})

test('Test startPackIndexFromFile with input', () => {
    const inputFile = path.join('day6', 'input.txt')
    expect(startPackIndexFromFile(inputFile)).toBe(1707)
})

test('Test startMessageIndex with input sample', () => {
    expect(startMessageIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19)
    expect(startMessageIndex('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23)
    expect(startMessageIndex('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23)
    expect(startMessageIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29)
    expect(startMessageIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26)
})

test('Test startMessageIndexFromFile with input', () => {
    const inputFile = path.join('day6', 'input.txt')
    expect(startMessageIndexFromFile(inputFile)).toBe(0)
})