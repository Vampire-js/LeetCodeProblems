/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = []
    function back(comb){
        if(comb.length == nums.length){
            ans.push([...comb])
            return
        }

        for(let i=0; i<nums.length; i++){
        
        if(!comb.includes(nums[i])) back([...comb, nums[i]])
        }
    }
    back([])
    return ans
};