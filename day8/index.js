import fs from 'fs'

const isVisible = (grid, gridSize, rowT, colT) => {
    //trees on col
    const upTrees = [], downTrees = []
    for (let row = 0; row < gridSize; row++) {
        if (row < rowT) upTrees.push(grid[row][colT])
        if (row > rowT) downTrees.push(grid[row][colT])
    }
    //trees on row
    const leftTrees = [], rightTrees = []
    for (let col = 0; col < gridSize; col++) {
        if (col < colT) leftTrees.push(grid[rowT][col])
        if (col > colT) rightTrees.push(grid[rowT][col])
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

const treeScore = (grid, gridSize, rowT, colT) => {
    const treeHeight = grid[rowT][colT]
    //trees view on top
    const upTrees = []
    const downTrees = []
    const leftTrees = []
    const rightTrees = []
    let lastHeight = treeHeight - 1
    for (let row = rowT - 1; row >= 0 && lastHeight < treeHeight; row--) {
        lastHeight = grid[row][colT]
        upTrees.push(lastHeight)
    }
    //trees view on bottom
    lastHeight = treeHeight - 1
    for (let row = rowT + 1; row < gridSize && lastHeight < treeHeight; row++) {
        lastHeight = grid[row][colT]
        downTrees.push(lastHeight)
    }
    //trees view on left
    lastHeight = treeHeight - 1
    for (let col = colT - 1; col >= 0 && lastHeight < treeHeight; col--) {
        lastHeight = grid[rowT][col]
        leftTrees.push(lastHeight)
    }
    //trees view on right
    lastHeight = treeHeight - 1
    for (let col = colT + 1; col < gridSize && lastHeight < treeHeight; col++) {
        lastHeight = grid[rowT][col]
        rightTrees.push(lastHeight)
    }

    return leftTrees.length * rightTrees.length * upTrees.length * downTrees.length
}

export const highestTreeScore = (inputFile) => {
    const grid = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n').map(row => row.split(''))
    const gridSize = grid.length  // grid: rows == cols
    const treeScores = grid.map((row, rowIdx) => {
        return row.map((col, colIdx) => {
            return treeScore(grid, gridSize, rowIdx, colIdx)
        })
    })
    return treeScores.flat().sort((a, b) => b - a)[0]
}