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
var diameterOfBinaryTree = function(root) {
    let max1 = -Infinity
    function trav(n){
        if(n == null) return 0

        let left = trav(n.left)
        let right = trav(n.right)

        max1 = Math.max(max1, left + right)

        return 1 + Math.max(left, right)
    }

    trav(root)

    return max1

};