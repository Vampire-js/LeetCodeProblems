/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
let map = {0:0, 1:0, 2:0}
for(let i=0; i<nums.length; i++){
    map[nums[i]] += 1
}

let id = 0
for(let i=0; i<3; i++){
    for(let j=0; j<map[i]; j++){
        nums[id] = i;
        id++
    }
}

};