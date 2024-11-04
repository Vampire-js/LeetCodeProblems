/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let comp = ""

    let left = 0
    let right = 0

    let char = word[0]
    let count = 1

    for(let i=1; i<=word.length; i++){
        if(word[i] == char && count < 9){
            count++
        }else{
            comp += String(count) + char
            char = word[i]
            count = 1
        }
    }

 
    return comp
};