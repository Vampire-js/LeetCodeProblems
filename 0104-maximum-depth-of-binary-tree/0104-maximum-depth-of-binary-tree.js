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
var maxDepth = function(root) {
    let max = -Infinity
    
    function dfs(r, d){
        if(r == null) {
            max = Math.max(max, d)
            return
        }

        dfs(r.left, d+1)
        dfs(r.right, d+1)
    }

    dfs(root, 0)

    return max
};