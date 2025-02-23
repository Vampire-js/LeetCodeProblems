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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    let ans = false
    function srch(r, sum){
        if(r == null){
            return
        }
              sum += r.val

        if(!r.right && !r.left && sum == targetSum){
            ans = true
            return
        }
  
        srch(r.left, sum)
        srch(r.right, sum)
    }
    srch(root,0)

    return ans
};
