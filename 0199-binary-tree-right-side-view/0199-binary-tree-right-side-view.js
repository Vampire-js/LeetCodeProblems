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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []
    let max = -Infinity
 function traverse(node, level) {
        if (!node) return;
        if (!result[level]) result[level] = [];
        
        result[level].push(node.val);
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);

let ans = []
    for(let i=0; i<result.length; i++){
        ans.push(result[i][result[i].length -1])
    }

return ans
};