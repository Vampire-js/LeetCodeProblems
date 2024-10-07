/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let index = 0;
    let max = 0;

    for (let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > max) {
            index = n;
            max = hash[n];
        }
    }

    return index;    
};