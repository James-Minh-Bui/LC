// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

var orangesRotting = function(grid) {
    let ro = []
    let fo = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) ro.push([i,j])
            if (grid[i][j]=== 1) fo+=1
        }
    }
    let queue = [];
    for (let el of ro) {
        queue.push({node:el,mins:0})
    }
    while (queue.length > 0) {
        let curr = queue.shift()
        let currNode = curr.node
        let currMin = curr.mins
        let dir = [[0,1],[0,-1],[1,0],[-1,0]];
        for (let el of dir) {
            let x = currNode[0] + el[0]
            let y = currNode[1] + el[1]
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y]===1) {
                queue.push({node:[x,y], mins: currMin+1})
                grid[x][y] = 2
                fo -= 1
                if (fo === 0) return currMin+1
            }
        }
        console.log(fo, queue)
    }
    return (fo === 0 ? 0 : -1)
};