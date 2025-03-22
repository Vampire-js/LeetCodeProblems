/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = []
    function trav(n, a){
        if(n == null) return
        if(!ans[a]) ans[a] = []

ans[a].push(n.val)
        for(let i=0; i<n.children.length; i++){
            trav(n.children[i], a+1)
        }
                
    }
    trav(root, 0)
    
    return ans
};