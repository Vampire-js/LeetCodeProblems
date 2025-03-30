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
var postorder = function(root) {
    let ans = []
    function trav(n){
        if(n == null) return
        
        for(let i=0; i<n.children.length; i++){
            trav(n.children[i])
        }
        ans.push(n.val)
    }

    trav(root)

    return ans
};