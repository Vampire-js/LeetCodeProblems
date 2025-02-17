/**
 * @param {number} numRows
 * @return {number[][]}
 */

 
function getsum(arr){
    let ans = []
    for(let i=0; i<arr.length+1; i++){
        ans.push(parseInt(arr[i-1] || 0) + parseInt(arr[i] || 0))
    }
    return ans
}

var generate = function(numRows) {
    let tree = [[1]]
    let i=0;
    while(tree.length < numRows){
        tree.push(getsum(tree[i]))
       i++

  
    }
    return tree
};
