/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let seen = new Array(n)
  let ans = 0
  for(let i=2; i<n; i++){
    if(seen[i]) continue
    ans++
    for(let j=i*i; j<n; j += i){
        seen[j] = true
    }
  }
  return ans
};