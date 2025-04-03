/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0
    let right = k-1
let ans = -Infinity;
    while(right < nums.length ){
        let avg = 0;
        for(let i=left; i<=right; i++){
            avg += nums[i]
        }
        avg /= k;
        ans = Math.max(ans, avg)
        left++
        right++
    }

    return ans
};