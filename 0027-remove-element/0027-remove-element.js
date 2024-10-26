/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            if (nums[right] !== val) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right--;
        } else {
            left++;
        }
    }
    
    console.log(nums);
    return left; 
};
