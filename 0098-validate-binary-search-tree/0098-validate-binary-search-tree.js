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
    let arr = []
    function vs(r){
        if(r == null){
            return
        }
        vs(r.left)
        arr.push(r.val)
        vs(r.right)
    }

    vs(root)
    console.log(arr)

    for(let i=0; i<arr.length; i++){
        if(arr[i+1] <= arr[i]){
            return false
        }
    }
    return true
};