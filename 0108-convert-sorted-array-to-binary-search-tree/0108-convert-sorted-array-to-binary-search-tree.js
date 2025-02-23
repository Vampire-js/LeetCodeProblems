/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function bs(arr){
        if(arr.length === 0) return null;

        let mid = Math.floor(arr.length / 2);
        let node = new TreeNode(arr[mid]);

        node.left = bs(arr.slice(0, mid));      
        node.right = bs(arr.slice(mid + 1)); 

        return node;
    }
    return bs(nums);
};
