/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let ans = []
    let curr = []
    candidates.sort((a, b) => a - b)
    back(candidates,0,target, ans, curr)
    return ans
    

};

    function back(candidates,start,target,result, curr){
        if(target == 0){
            result.push([...curr])
            return 
        }
        if(target < 0){
            return
        }
        for(let i=start; i<candidates.length; i++){
            curr.push(candidates[i])
            back(candidates,i, target - candidates[i], result, curr)
            curr.pop()
        }
    }
