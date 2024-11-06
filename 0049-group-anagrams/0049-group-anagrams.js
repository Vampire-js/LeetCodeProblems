var groupAnagrams = function(strs) {
    let ans = new Map()


    for(let s of strs){
        let count = new Array(26).fill(0)
         const baseCharCode = 'a'.charCodeAt(0)

        for(let c of s){
            count[c.charCodeAt(0) - baseCharCode]++
        }
let key = count.join(":")
        if(!ans.has(key)){
            ans.set(key , [])
        }

        ans.get(key).push(s)
    }  


    return Array.from(ans.values())
};