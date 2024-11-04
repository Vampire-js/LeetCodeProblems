/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = ""

    let left = 0
    let right = 0

     let char = word[left]
        let count = 0
    
    while(right <= word.length){
       
        if(word[left] == word[right]){
            if(count < 9){
            right++
            count++
            }else{
            comp += `${count}${char}`
            count = 0
            char = word[right]
            left = right
            }
          
        }else{
            comp += `${count}${char}`
            count = 0
            char = word[right]
            left = right
        }
    }

    return comp
};