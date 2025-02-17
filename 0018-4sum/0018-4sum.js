/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)

    let ans = []
    for(let i=0; i<nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue
        for(let j=i+1; j<nums.length; j++){
        if(j > i+1 && nums[j] == nums[j-1]) continue
            let a = j+1
            let b = nums.length-1
            while(a<b){
               let sum= nums[a] + nums[b] + nums[i] + nums[j]
               if(sum == target){
                ans.push([nums[a] ,nums[b], nums[i] ,nums[j]])
                a++ 
                b--
                while(a < b && nums[a] == nums[a-1]) a++ 
                while(a < b && nums[b] == nums[b+1]) b-- 
               }
               if(sum < target) a++
               if(sum > target) b--
            }
        }
    }

    return ans
}