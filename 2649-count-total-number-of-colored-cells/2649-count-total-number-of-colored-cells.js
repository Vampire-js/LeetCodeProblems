/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    return (1 + (n-1)*(8+(n-2)*4)/2)
};