/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    function compare(n1,n2){
        if(parseInt(`${n1}${n2}`) > parseInt(`${n2}${n1}`)) {return true}
        return false
    }
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length - 1 - i; j++){
            if(!compare(nums[j], nums[j+1])){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    
    let ans = ""
    let isZero = true
    for(let i=0; i<nums.length ; i++){
        if(nums[i] != 0){
            isZero = false
        }
    }
    for(let i=0; i<nums.length ; i++){
        // if(nums[i] == 0 && nums[i+1] == 0) continue
        if(isZero) ans = "0"
        else ans += `${nums[i]}`
        
    }
    return ans
};