/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length -1

    if(nums.length == 1){
        return 0
    }

    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1]){
            return mid
        }

        if(mid == 0 || mid == nums.length -1){
            if(nums[mid + 1] < nums[mid] || nums[mid-1] < nums[mid]){
                return mid
            }
        }


        if(nums[mid] < nums[mid+1]){
            left = mid + 1
        }else{
            right = mid - 1
        }

    }

    return nums[Math.floor((left+right)/2)]
};