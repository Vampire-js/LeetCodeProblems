/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
 let ans = -Infinity
 for(let i=0; i<nums.length -1; i++){
    let p = nums[i]
     for(let j=i+1; j<nums.length; j++){
        
        p *= nums[j]
        ans = Math.max(p,ans)
     }
 }
ans = Math.max(ans, Math.max(...nums))
   return ans
};