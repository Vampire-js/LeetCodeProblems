/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
    let ans = 0;

    while (num > 0) {
        ans += num % 10;
        num = Math.floor(num / 10);
    }

    return ans < 10 ? ans : addDigits(ans);
};
