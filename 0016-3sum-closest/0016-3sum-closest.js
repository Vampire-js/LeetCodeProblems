/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function absoluteMin(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a) < Math.abs(b) ? a : b;
}

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closestGap = Infinity; 
   
   

for(let left = 0; left < nums.length -2; left++){
        let middle = left + 1;
        let right = nums.length -1

        while (middle < right) {
            const currentSum = nums[left] + nums[middle] + nums[right];
            const currentGap = target - currentSum;

            closestGap = absoluteMin(closestGap, currentGap);
              if (Math.abs(currentSum - target) < Math.abs(closestGap - target)) closest = currentSum;
            if (currentSum > target) right--;
            else middle++;
        }
     
    }

    return target -closestGap;
};
