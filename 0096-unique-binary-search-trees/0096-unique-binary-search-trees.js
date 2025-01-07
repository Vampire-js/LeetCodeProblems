/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let trees = new Array(n+1).fill(1)

    for(let i=2; i<=n; i++){
        let ans = 0;
        for(let j=1; j<=i; j++){
            ans += trees[j-1]*trees[i-j]
        }
        trees[i] = ans
    }

    return trees[n]
};