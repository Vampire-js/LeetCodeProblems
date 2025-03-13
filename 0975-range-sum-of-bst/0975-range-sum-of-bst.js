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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let ans = 0
    function trav(n){
        if(n == null) return
        if(n.val >= low && n.val <= high) ans += n.val
        trav(n.left)
        trav(n.right)
    }
    trav(root)
    return ans
};