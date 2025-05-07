/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if (x <= arr[0]) {
        return arr.slice(0, k);
    } else if (x >= arr[arr.length - 1]) {
        return arr.slice(arr.length - k);
    } else {
        
        const sorted = arr.slice().sort((a, b) => {
            const diffA = Math.abs(a - x);
            const diffB = Math.abs(b - x);
            return diffA === diffB ? a - b : diffA - diffB;
        });

        const result = sorted.slice(0, k).sort((a, b) => a - b);
        return result;
    }
};
