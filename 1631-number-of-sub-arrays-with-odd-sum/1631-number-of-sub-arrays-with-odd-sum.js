/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let sum = 0;
    let count = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        count += sum%2
    }
    return (count + count*(arr.length-count))% 1_000_000_007;
};