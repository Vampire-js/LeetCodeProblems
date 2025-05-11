/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let odd = 0
    for(let i=0; i<arr.length-2; i++){
        let a = arr[i]
        let b = arr[i+1]
        let c = arr[i+2]

        if(a%2 != 0 && b%2 != 0 && c%2 != 0){
            return true
        }
    }
    return false
};