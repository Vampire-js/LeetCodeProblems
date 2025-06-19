/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var uniquePaths = function(m, n) {
    function fact(a){
        let res = 1n;
        for(let i = 2n; i <= a; i++){
            res *= i;
        }
        return res;
    }

    let M = BigInt(m);
    let N = BigInt(n);
    
    return Number(fact(M + N - 2n) / (fact(M - 1n) * fact(N - 1n)));
};
