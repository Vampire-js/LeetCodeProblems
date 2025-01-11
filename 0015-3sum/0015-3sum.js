function twoSum(target, arr, start) {
    let ans = [];
    let seen = new Set();

    for (let j = start; j < arr.length; j++) {
        let complement = target - arr[j];
        if (seen.has(complement)) {
            ans.push([complement, arr[j]]);
            while (j + 1 < arr.length && arr[j] === arr[j + 1]) {
                j++;
            }
        }
        seen.add(arr[j]);
    }

    return ans;
}

var threeSum = function(nums) {
    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let target = -nums[i];
        let pairs = twoSum(target, nums, i + 1);

        for (let pair of pairs) {
            ans.push([nums[i], ...pair]);
        }
    }

    return ans;
};

