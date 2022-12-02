import fs from 'fs'
import path from 'path'

const getCaloriesByElf = (inputFile) => {
    const calories = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    let currElfCalories = 0
    const caloriesByElf = []
    for (let i = 0; i < calories.length; i++) {
        const cal = calories[i]
        if (cal.length > 0) { //add calories to current elf
            currElfCalories += Number(cal)
        } else { //next elf
            caloriesByElf.push(currElfCalories)
            currElfCalories = 0
        }
    }
    if (currElfCalories) caloriesByElf.push(currElfCalories)
    return caloriesByElf
}

export const maxElfCalories = (inputFile) => {
    const sortedCalories = getCaloriesByElf(inputFile).sort((a, b) => b - a)
    return sortedCalories[0]
}

export const top3ElfCalories = (inputFile) => {
    const sortedCalories = getCaloriesByElf(inputFile).sort((a, b) => b - a)
    return sortedCalories[0] + sortedCalories[1] + sortedCalories[2]
}