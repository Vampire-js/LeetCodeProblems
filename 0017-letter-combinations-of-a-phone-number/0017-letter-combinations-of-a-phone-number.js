/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []
   const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
let ans = []
    function back(comb, id){
        if(id == digits.length){
            ans.push(comb)
            return
        }
        for(let a of digitToLetters[digits[id]]){
            back(comb+a, id+1)
        }
    }
    back("", 0)

    return ans
};

