/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans =0
    for(let i=0; i<nums.length ; i += 1){
        ans = ans ^ nums[i]
    }
    return ans
};
/*
00 ^ 10 = 10
10 ^ 10 = 00
00^01 = 01
 */