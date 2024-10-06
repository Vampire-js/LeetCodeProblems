/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0
    let right = num
    
    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(mid*mid == num){
            return mid
        }
        if(mid*mid < num){
            left = mid + 1
        }else{
            right = mid -1
        }
    
    }
    if(left*left == num){
        return true
    }else{
        return false
    }
};