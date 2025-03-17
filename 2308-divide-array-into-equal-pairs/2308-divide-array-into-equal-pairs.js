/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let map = {}

    for(let i=0; i<nums.length; i++){
        map[nums[i]] = (map[nums[i]] | 0) + 1
    }

    for(let k in map){
        if(map[k]%2 != 0) return false
    }

    return true
};