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
var sumNumbers = function(root) {
    let ans = 0;
    function trav(n, str){
        if(n == null) return

        str += `${n.val}`
        if(n.left == null && n.right == null){
            ans += parseInt(str)
        }
        trav(n.left, str)
        trav(n.right, str)
    }
    trav(root, "")

    return ans
};