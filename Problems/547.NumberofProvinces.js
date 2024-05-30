// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

 

// Example 1:


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:


// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
 

var findCircleNum = function(isConnected) {
    let provinces = 0;
    const visitedCities = new Set();
    
    for(let i =0; i< isConnected.length; i++){
        if(!visitedCities.has(i)){
            provinces++;
            visitedCities.add(i);
            dfs(i, isConnected, visitedCities);
        }
    }
    
    return provinces;
};

var dfs = function(city, isConnected, visitedCities){
    for(let i =0; i< isConnected[city].length; i++){
        if(!visitedCities.has(i) && isConnected[city][i] === 1){
            visitedCities.add(i);
            dfs(i, isConnected, visitedCities);
        }
    }
}
