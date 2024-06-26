// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

var rightSideView = function(root) {
    if (!root) return []
    let result = {}
    let queue = [{rootVal:root, count : 0}]
    while (queue.length > 0) {
        let curr = queue.shift()
        let currNode = curr.rootVal
        let currCount = curr.count 
        if (!result.hasOwnProperty(currCount)) {
            result[currCount] = currNode.val
            }
        if (currNode.right !== null) {
            queue.push({rootVal:currNode.right, count: currCount+1})
        }
        if (currNode.left !== null) queue.push({rootVal:currNode.left, count: currCount+1})
    }
    return Object.values(result)
};