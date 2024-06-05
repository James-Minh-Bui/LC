// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

 

// Example 1:


// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.
// Example 2:


// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.
// Example 3:


// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.

let nearestExit = (maze, entrance) => {
    const EMPTY = ".", WALL = "+";
    let getNeighbors = (row,col) => {
      let neighbors = [];
      let shifts = [[0,1],[0,-1],[1,0],[-1,0]];
      let inBounds = (row, col) => row >= 0 && row < maze.length && col >= 0 && col < maze[0].length;
      for (let [rShift,cShift] of shifts) {
        let [nRow,nCol] = [row + rShift, col + cShift];
        if (inBounds(nRow,nCol) && maze[nRow][nCol] !== WALL) neighbors.push([nRow,nCol]);
      }
      return neighbors;
    }
  
    let isExit = (row,col) => {
      let atBorder = (row === 0 || col === 0 || row === maze.length - 1 || col === maze[0].length - 1);
      let notEntrance = !(row === entrance[0] && col === entrance[1]);
      return atBorder && notEntrance;
    }
  
    let count = 0;
    let queue = [entrance];
    maze[entrance[0]][entrance[1]] = 1;
    while (queue.length) {
      let length = queue.length;
  
      for (let i = 0; i < length; i++) {
        let [row,col] = queue.shift();
        if (isExit(row,col)) return count;
    
        let neighbors = getNeighbors(row,col);
        for (let [nRow, nCol] of neighbors) {
          if (maze[nRow][nCol] === EMPTY) {
            maze[nRow][nCol] = 1;
            queue.push([nRow,nCol]);
          }
        }
      }
      count++;
    }
    return -1;
  }