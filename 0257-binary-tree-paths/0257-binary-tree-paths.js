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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ans = []
    function trav(r, curr){
        if(r == null) return
        if(!r.left && !r.right){
            ans.push(curr + r.val)
            return
        }
        trav(r.left, curr + r.val + '->')

        trav(r.right, curr + r.val + '->')

    }
    trav(root, "")
    return ans

};