var twoSum = function(nums, target) {
    var numIndices = {};
    
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    
    return null; 
};
