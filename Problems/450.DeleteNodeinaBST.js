// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []

var deleteNode = function(root, key) {
    
    function callDFS(node) {
        if(!node) return null;
        if(node.val === key) {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            let curr = node.right;
            while(curr.left) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        if(key > node.val) node.right = callDFS(node.right);
        else node.left = callDFS(node.left);
        return node;
    }
    return callDFS(root)
};