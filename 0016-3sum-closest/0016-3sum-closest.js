/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closestGap = Infinity; 
   
   

for(let left = 0; left < nums.length -2; left++){
        let middle = left + 1;
        let right = nums.length -1

        while (middle < right) {
            const currentSum = nums[left] + nums[middle] + nums[right];
           
              if (Math.abs(currentSum - target) < Math.abs(closestGap - target)) closestGap = currentSum;
            if (currentSum > target) right--;
            else middle++;
        }
     
    }

    return closestGap;
};
