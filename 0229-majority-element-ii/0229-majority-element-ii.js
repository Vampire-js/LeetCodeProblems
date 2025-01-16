/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    let ans = []
    let left = 0
    let right = 0
    while (nums[right] != null) {
        while (nums[right] == nums[left]){
            right++
        }
        if (right - left > nums.length / 3) ans.push(nums[left])
        left = right
    }
    return ans
};