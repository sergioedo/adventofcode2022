import fs from 'fs'
import { isFunction } from 'util'

const getSharedItem = (rucksack) => {
    const firstCompartment = rucksack.substring(0, rucksack.length / 2)
    const secondCompartment = rucksack.substring(rucksack.length / 2)

    return firstCompartment.split('').find(item => secondCompartment.includes(item))
}

const getItemPriority = (item) => {
    const charCode = item.charCodeAt(0)
    if (charCode >= 97) return charCode - 97 + 1 // [a-z]
    return charCode - 65 + 27 // [A-Z]
}

export const sumPriorities = (inputFile) => {
    const rucksacks = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    const sharedItems = rucksacks.map(getSharedItem)

    return sharedItems.reduce((prev, curr) => prev + getItemPriority(curr), 0)
}