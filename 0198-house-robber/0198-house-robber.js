/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   let memo = {}
   let s1 = 0
   let s2 = 0
   function loot(house){
    if (house >= nums.length) return 0;
    if (memo[house] !== undefined) return memo[house];
  
    memo[house] = Math.max(nums[house] + loot(house +2) , loot(house+1))

    return memo[house]
   }

   return loot(0)
};