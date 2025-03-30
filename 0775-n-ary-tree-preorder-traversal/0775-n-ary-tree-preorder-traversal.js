/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = []
    function trav(n){
        if(n == null) return
        ans.push(n.val)
        for(let i=0; i<n.children.length; i++){
            trav(n.children[i])
        }
    }

    trav(root)

    return ans
};