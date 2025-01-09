/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function bs(arr, n){
        let swapped = false

        for(let i=0; i<arr.length - n; i++){
            if(arr[i] >= arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }

        if(swapped){
            return bs(arr, n+1)
        }

        return arr
    }

bs(nums,0)
};