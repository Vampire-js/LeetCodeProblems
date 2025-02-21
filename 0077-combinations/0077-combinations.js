/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = []

    
    function back(comb, id){
        if(comb.length == k) ans.push([...comb])

        for(let i=id; i<=n; i++){
            back([...comb, i], i+1)     
        }
    }

    back([],1)
    return ans
};