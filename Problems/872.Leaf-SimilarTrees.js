// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

// Example 1:


// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:


// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false
 
var leafSimilar = function(root1, root2) {
    function dfs(root) {
        result = []
        let stack = [root]
        while (stack.length > 0) {
            let curr = stack.pop()
            if (curr.left !== null) stack.push(curr.left)
            if (curr.right !== null) stack.push(curr.right)
            if (curr.left === null && curr.right === null) result.push(curr.val)
        }
        return result
    }
    let root1Nodes = dfs(root1)
    let root2Nodes = dfs(root2)
    return root1Nodes.toString() === root2Nodes.toString()
};