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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let ans = 0
    function trav(n, s) {
        if (n == null) return
        s += n.val;
        if (s == targetSum) ans += 1
        trav(n.left, s)
        trav(n.right, s)
    }
    function allnodes(n) {
        if (n == null) return
        trav(n, 0)

        allnodes(n.left)
        allnodes(n.right)

    }

    allnodes(root)

    return ans
};