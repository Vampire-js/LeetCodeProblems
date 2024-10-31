/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map = {}

   for(let c of strs){
        let a = c.split('').sort().join('')
console.log(a)
        if(!map[a]){
            map[a] = []
        }
        map[a].push(c)
   }
   console.log(map)
   return Object.values(map)
};