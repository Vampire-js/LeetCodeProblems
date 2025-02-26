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
var getMinimumDifference = function(root) {
    let arr = []
    function trav(r){
        if(r == null) return

        arr.push(r.val)
        trav(r.left)
        trav(r.right)
    }

    trav(root)
    let diff = Infinity
    for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        diff = Math.min(diff, Math.abs(arr[i] - arr[j]))
    }
    }

    return diff
};