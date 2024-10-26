/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
   let ans = 0;
    if (x < 0) {
        ans = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        ans = parseInt(String(x).split('').reverse().join(''));
    }

    if (ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31)) {
        return 0;
    }

    return ans;   
};