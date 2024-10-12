/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = 1;
    let ans = 0;

    while(right < nums.length){

        if(nums[left] > nums[right]){
            ans = right
            break;
        }else{
            ans = 0
        }

        right++
        left++

    }

return nums[ans]

};