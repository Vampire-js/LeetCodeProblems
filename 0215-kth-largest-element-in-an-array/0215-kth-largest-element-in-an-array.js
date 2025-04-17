/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //   let left = 0
    //   let right = 0

    // let ans = -Infinity
    //   let min = Infinity
    //   let secmin = Infinity
    //   while(right < k-1){
    //     min = Math.min(min, nums[right])
    //     if(min <= secmin && nums[right] < secmin) secmin = nums[right]
    //     right++
    //   }
    //   for(let i=right+1; i < nums.length; i++){
    //     if(nums[i] >min){
    //         secmin = Math.min(secmin , nums[i])
    //     }
    //   }

    // return secmin

    nums.sort((a,b) => a-b)
    return nums[nums.length - k]
};