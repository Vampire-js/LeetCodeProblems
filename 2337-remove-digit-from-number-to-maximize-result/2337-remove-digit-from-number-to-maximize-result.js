/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {

    function remove(n){
        let arr = number.split('')
        arr.splice(n,1)
        return arr.join('')
    }
        let a = []
    for(let i=0; i<number.length; i++){
          
          if(number[i] == digit){
           
            a.push(remove(i))
        }
    }

    a.sort()
    return a[a.length - 1]
};