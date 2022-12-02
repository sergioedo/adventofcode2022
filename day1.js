import fs from 'fs'

export const maxElfCalories = (inputFile) => {
    const calories = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    let maxCalories = 0
    let currElfCalories = 0
    for (let i = 0; i < calories.length; i++) {
        const cal = calories[i]
        if (cal.length > 0) { //add calories to current elf
            currElfCalories += Number(cal)
        } else { //next elf
            if (currElfCalories > maxCalories) maxCalories = currElfCalories
            currElfCalories = 0
        }
    }
    return maxCalories
}