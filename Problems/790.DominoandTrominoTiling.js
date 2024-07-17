// You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.


// Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

// In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

 

// Example 1:


// Input: n = 3
// Output: 5
// Explanation: The five different ways are show above.
// Example 2:

// Input: n = 1
// Output: 1

var numTilings = function(n) {
    let mod = 10 ** 9 + 7;    
    let len = 4;
    let ways = new Array(len).fill(0);

    ways[0] = 1;
    ways[1] = 1;
    ways[2] = 2;

    if (n < len - 1) {
        return ways[n];
    }    
    
    for (var i = len - 1; i <= n;i++) {        
        ways[i % len] = ( 
            ways[(len + i - 1) % len] * 2
            + 
            ways[(len + i - 3) % len] 
        ) % mod;          
    }
    
    return ways[(i - 1) % len];
};