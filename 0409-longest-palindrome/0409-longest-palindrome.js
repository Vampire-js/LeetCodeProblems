/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}
    let max = 0
    for(let c of s){
        map[c] = 1 + (map[c] | 0)
         if(map[c]%2 == 0 ) max += 2
    }
    
    return s.length > max ? max+1 : max
};