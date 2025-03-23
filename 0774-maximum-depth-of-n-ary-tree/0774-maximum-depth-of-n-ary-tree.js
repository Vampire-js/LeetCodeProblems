/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let ans = 0
    function trav(n, a){
        if(n == null) return 

        if(n.children.length == 0){
            ans = Math.max(ans, a)
        }
        for(let i=0; i<n.children.length; i++){
            trav(n.children[i], a+1)
        }
    }

    trav(root, 1)

    return ans
};