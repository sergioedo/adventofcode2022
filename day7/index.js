import fs from 'fs'

export const parseDirectories = (inputFile) => {
    const input = fs.readFileSync(inputFile, { encoding: 'UTF-8' }).split('\n')
    let currentPath = []
    const directories = {}
    let listing = false
    input.map(line => {
        if (line.startsWith('$ cd')) {
            listing = false
            const enterDir = line.split(' ')[2]
            if (enterDir === '..') {
                currentPath.pop()
            } else {
                if (enterDir === '/') currentPath = [] //go to root dir
                else currentPath.push(enterDir)
            }
        } else if (line.startsWith('$ ls')) {
            listing = true
        } else if (listing) {
            const isDirectory = line.split(' ')[0] === 'dir'
            if (!isDirectory) {
                const fileSize = line.split(' ')[0]
                const fileName = line.split(' ')[1]
                for (let i = 0; i <= currentPath.length; i++) {
                    const currentDir = "/" + currentPath.slice(0, i).join('/')
                    directories[currentDir] = (directories[currentDir] || 0) + Number(fileSize)
                }
            }
        }
    })
    return directories
}

export const sumDirectoriesByMaxSize = (inputFile) => {
    const directories = parseDirectories(inputFile)
    return Object.values(directories)
        .filter(size => size <= 100000)
        .reduce((prev, curr) => prev + curr, 0)
}

export const dirSizeToDelete = (inputFile, totalDiskSize, targetFreeSpace) => {
    const directories = parseDirectories(inputFile)
    const usedSpace = directories['/']
    const freeSpace = totalDiskSize - usedSpace
    const freeUpSpace = targetFreeSpace - freeSpace
    const sortedDirs = Object.values(directories)
        .sort((a, b) => a - b)
        .filter(size => size >= freeUpSpace)
    return sortedDirs[0]
} 