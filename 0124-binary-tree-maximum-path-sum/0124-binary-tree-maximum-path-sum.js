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


var maxPathSum = function (root) {
    let ans = -Infinity

    function sum(n) {
        if (n == null) {
            return 0;
        }
        let left = Math.max(0,sum(n.left));
        let right = Math.max(0,sum(n.right));

        ans = Math.max(ans, left + right + n.val)

    return n.val + Math.max(left,right)
    }



    sum(root)
    return ans
};