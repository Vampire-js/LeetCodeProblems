/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
   let ans = Math.max(...nums)
   let max = 1
   let min = 1
   for(let n of nums){
    let temp = max*n
    max = Math.max(temp, min*n, n)
    min = Math.min(temp, min*n, n)

    ans = Math.max(ans, max)
   }

   return ans
};