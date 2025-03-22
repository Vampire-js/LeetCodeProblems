/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []

    candidates.sort((a, b) => a - b);

     function arrsum(a) {
        return a.reduce((sum, e) => sum + e, 0);
    }

    function trav(lvl, c, ans){
        let sum = arrsum(ans);
        if (sum === target) {
            res.push([...ans]); 
            return;
        }
        if (sum > target || lvl >= c.length) return;

        for(let i=lvl+1; i<c.length; i++){
            if(i > lvl+1 && c[i] == c[i-1]) continue
           ans.push(c[i])
            trav(i, c, ans)
            ans.pop()
        
        }
    }
trav(-1,candidates, [])

return res
};