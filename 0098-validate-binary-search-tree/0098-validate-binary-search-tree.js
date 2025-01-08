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
 * @return {boolean}
 */
var isValidBST = function (root) {
    
function validate(r,min, max){
    if(!r) return true

    if(!(r.val > min && r.val < max)) return false;
    return validate(r.left, min, r.val) && validate(r.right, r.val, max)
}

return validate(root, -Infinity, +Infinity)
};