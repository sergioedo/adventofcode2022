import fs from 'fs'

const isVisible = (grid, gridSize, rowT, colT) => {
    //trees on row
    const leftTrees = [], rightTrees = []
    for (let row = 0; row < gridSize; row++) {
        if (row < rowT) leftTrees.push(grid[row][colT])
        if (row > rowT) rightTrees.push(grid[row][colT])
    }
    //trees on col
    const upTrees = [], downTrees = []
    for (let col = 0; col < gridSize; col++) {
        if (col < colT) upTrees.push(grid[rowT][col])
        if (col > colT) downTrees.push(grid[rowT][col])
    }
    const treeHeight = grid[rowT][colT]
    return leftTrees.every(height => height < treeHeight) ||
        rightTrees.every(height => height < treeHeight) ||
        upTrees.every(height => height < treeHeight) ||
        downTrees.every(height => height < treeHeight)
}

export const countVisibleTree = (inputFile) => {
    const grid = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n').map(row => row.split(''))
    const gridSize = grid.length  // grid: rows == cols
    let countNoVisible = 0
    for (let row = 1; row < gridSize - 1; row++) {
        for (let col = 1; col < gridSize - 1; col++) {
            if (!isVisible(grid, gridSize, row, col)) countNoVisible++
        }
    }
    return (gridSize * gridSize) - countNoVisible
}