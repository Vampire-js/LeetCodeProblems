/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length -1;

    while(left < right){
        let mid = Math.floor((left + right)/2)

if(nums[mid] == nums[right]){
right--
}else if(nums[mid] > nums[right]){
            left = mid + 1
        }else{
            right = mid
        }
        // if(nums[left] > nums[right]){
        //     ans = right
        //     break;
        // }else{
        //     ans = 0
        // }

        // right++
        // left++

    }

return nums[left]

};