import { expect, test } from 'vitest'
import { startPackIndex, startPackIndexFromFile } from 'day6'
import path from 'path'


test('Test loadStacks with input sample', () => {
    expect(startPackIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7)
    expect(startPackIndex('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)
    expect(startPackIndex('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6)
    expect(startPackIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10)
    expect(startPackIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11)
})

test('Test loadStacks with input sample', () => {
    const inputFile = path.join('day6', 'input.txt')
    expect(startPackIndexFromFile(inputFile)).toBe(1707)
})