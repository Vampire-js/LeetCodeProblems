var groupAnagrams = function(strs) {
    let ans = new Map()

    for (let s of strs) {
        let key = s.split('').sort().join('');
        if (!ans.has(key)) {
            ans.set(key , [])
        }
        ans.get(key).push(s)
    }
    let res = []
    for(let [a,b] of ans){
        res.push(b)
    }

    return res;    
};