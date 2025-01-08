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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
let arr = []
let map = []
    function dfs(r){
        if(r == null){
            return
        }
        dfs(r.left)
       arr.push(r)
        dfs(r.right)
    }
    dfs(root)
 let first = null, second = null;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].val > arr[i + 1].val) {
            
            if (first == null) {
                first = arr[i];
            }
            second = arr[i + 1];
        }
    }
    
    if (first && second) {
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
    }

    
};
