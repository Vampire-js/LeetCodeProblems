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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = []
    function bfs(r, lvl) {
        if (r == null) return
        if( ans.length <= lvl) ans.push([])
        
        ans[lvl].push(r.val)
        bfs(r.left, lvl + 1)
        bfs(r.right, lvl + 1)
    
 
    }
    bfs(root, 0)
    return ans
};