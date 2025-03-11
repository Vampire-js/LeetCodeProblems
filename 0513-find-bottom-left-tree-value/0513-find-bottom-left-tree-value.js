/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let tree = []
    function trav(n, c){
        if(n == null) return 
        if(!tree[c]) tree[c] = []

        tree[c].push(n.val)
        
        trav(n.left, c+1)
        trav(n.right, c+1)
    }
    trav(root, 0)

    return tree[tree.length-1][0]
};