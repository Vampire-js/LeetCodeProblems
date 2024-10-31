/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map = {}

   for(let c of strs){
        let a = c.split('').sort().join('')
        if(!map[a]){
            map[a] = []
        }
        map[a].push(c)
   }
   return Object.values(map)
};