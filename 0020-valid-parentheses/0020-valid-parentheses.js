/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    
    for(let i=0; i <s.length; i++){
        let curr = s[i]

        if(curr == "(" || curr == "[" || curr == "{"){
            stack.push(curr)
        }else{
            let prev = stack.pop()

           if(prev != "(" && curr == ")") return false
           if(prev != "{" && curr == "}") return false
           if(prev != "[" && curr == "]") return false
    if(prev == undefined) return false
         
        }
    }

    if(stack.length != 0){
return false
    }

    return true


};