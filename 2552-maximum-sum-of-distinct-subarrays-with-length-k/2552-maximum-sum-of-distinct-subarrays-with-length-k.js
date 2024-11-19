/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
  let left = 0
  let right = 0
  let max = 0
  let map = new Map()
let sum = 0
  while(right < nums.length){
    sum += nums[right]
    map.set(nums[right], (map.get(nums[right]) || 0) + 1)
    if(right-left + 1 == k){
        if(map.size == k){
            max = Math.max(max, sum)
        }
        if(map.get(nums[left]) == 1 ){
            map.delete(nums[left])
        }else{
            map.set(nums[left], (map.get(nums[left]) -1))
        }
        sum -= nums[left]
        left++
    }
    right++
  }

  return max
};
