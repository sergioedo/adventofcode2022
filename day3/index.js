import fs from 'fs'
import { isFunction } from 'util'

const getSharedItem = (group) => {
    const [firstElement, ...restElements] = group

    return firstElement.split('').find(item => restElements.every(element => element.includes(item)))
}

const getItemPriority = (item) => {
    const charCode = item.charCodeAt(0)
    if (charCode >= 97) return charCode - 97 + 1 // [a-z]
    return charCode - 65 + 27 // [A-Z]
}

const getRucksackParts = (input) => {
    return input.map(rucksack => {
        const firstCompartment = rucksack.substring(0, rucksack.length / 2)
        const secondCompartment = rucksack.substring(rucksack.length / 2)
        return [firstCompartment, secondCompartment]
    })
}

const sumSharedItemsPriorities = (inputFile, getGroupedItems) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    const sharedItems = getGroupedItems(input).map(getSharedItem)
    return sharedItems.reduce((prev, curr) => prev + getItemPriority(curr), 0)
}

export const sumPriorities = (inputFile) => {
    return sumSharedItemsPriorities(inputFile, getRucksackParts)
}

const getRucksackGroups = (input) => {
    return Object.values(input.reduce((prev, curr, currIdx) => {
        const groupIdx = Math.floor(currIdx / 3)
        if (!prev[groupIdx]) prev[groupIdx] = []
        prev[groupIdx].push(curr)
        return prev
    }, {}))
}

export const sumGroupPriorities = (inputFile) => {
    return sumSharedItemsPriorities(inputFile, getRucksackGroups)
}