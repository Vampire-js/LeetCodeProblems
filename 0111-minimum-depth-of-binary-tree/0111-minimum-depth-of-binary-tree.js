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

var minDepth = function (root) {
    if (root == null) return 0
    let ans = Infinity;
    function min(r, d) {
        if (r == null) return
        if (r.left == null && r.right == null) {
            ans = Math.min(ans, d)
        }
        min(r.left, d + 1)
        min(r.right, d + 1)
    }

    min(root, 1)
    return ans
};