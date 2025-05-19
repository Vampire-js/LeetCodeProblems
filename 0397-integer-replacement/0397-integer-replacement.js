/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    if(n== 1) return 0
    function even(n){
        let steps = 0
        while(n != 1){
            if(n%2 == 0) n *= 0.5
            else if(n==3 || n%4 == 1){
                n -= 1
            }
            else{
                n = n+1
            }
            steps++
        }
        return steps
    }
   return even(n)
};