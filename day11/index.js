import fs from 'fs'
import { test } from 'vitest'

const getOperation = (operator, value) => {
    if (operator === '+') {
        if (value === 'old') return (input) => input + input
        else return (input) => input + Number(value)
    }
    if (operator === '*') {
        if (value === 'old') return (input) => input * input
        else return (input) => input * Number(value)
    }
    return (input) => input
}

export const monkeyBusiness = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    const monkeys = []
    for (let line = 0; line < input.length; line += 7) {
        const startingItems = input[line + 1].split(': ')[1].split(', ').map(Number)
        const operationText = input[line + 2].split('new = old ')[1].split(' ')
        const operator = operationText[0]
        const operatorValue = operationText[1]
        const divisible = Number(input[line + 3].split('divisible by ')[1])
        const monkeyTrue = Number(input[line + 4].split('If true: throw to monkey ')[1])
        const monkeyFalse = Number(input[line + 5].split('If false: throw to monkey ')[1])
        monkeys.push({
            items: startingItems,
            operation: getOperation(operator, operatorValue),
            test: {
                divisible,
                monkeyTrue,
                monkeyFalse
            },
            inspectedItemsCount: 0
        })
    }

    for (let round = 1; round <= 20; round++) {
        console.log(`Round ${round}`)
        for (let monkeyIdx = 0; monkeyIdx < monkeys.length; monkeyIdx++) {
            console.log(`  Monkey ${monkeyIdx}:`)
            const monkey = monkeys[monkeyIdx]
            for (let itemIdx = 0; itemIdx < monkey.items.length; itemIdx++) {
                const item = monkey.items[itemIdx]
                console.log(`    Monkey inspects an item with a worry level of ${item}.`)
                const inspectedItem = monkey.operation(item)
                console.log(`      Worry level is operated to ${inspectedItem}.`)
                const worriedItem = Math.floor(inspectedItem / 3)
                console.log(`      Monkey gets bored with item. Worry level is divided by 3 to ${worriedItem}.`)
                const isDivisible = (worriedItem % monkey.test.divisible) === 0
                console.log(`      Current worry level is ${isDivisible ? '' : 'not'} divisible by ${monkey.test.divisible}.`)

                const throwToMonkey = isDivisible ? monkey.test.monkeyTrue : monkey.test.monkeyFalse
                console.log(`      Item with worry level ${worriedItem} is thrown to monkey ${throwToMonkey}.`)
                monkeys[throwToMonkey].items.push(worriedItem)
                monkeys[monkeyIdx].inspectedItemsCount++
            }
            monkeys[monkeyIdx].items = []
        }
    }

    const sortedItemsCount = monkeys.map(monkey => monkey.inspectedItemsCount).sort((a, b) => b - a)

    return sortedItemsCount[0] * sortedItemsCount[1]
}