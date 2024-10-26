/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {


let arr = word.split('')

    let left = 0
    let right = 1
    let ans = 1

    while(right <= arr.length -1){
        if(arr[left] == arr[right]){
            ans++
        }
        right++
        left++
    }
    return ans
};