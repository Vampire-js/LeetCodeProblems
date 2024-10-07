/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
let max = 0
let index = 0
    for(let i=0; i<nums.length; i++){
        map[nums[i]] = 0
    }
    for(let i=0; i<nums.length; i++){
        map[nums[i]] += 1
    }
    for(let n in map){
        if(map[n] > max){
            max = map[n]
            index = n
        }
    }
    console.log(map)
    return parseInt(index)
};