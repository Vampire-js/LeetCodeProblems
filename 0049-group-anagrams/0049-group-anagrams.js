/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = new Map();
    const baseCharCode = 'a'.charCodeAt(0);

    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - baseCharCode]++;
        }
        const key = count.join('#');

        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key).push(s);
    }

    return Array.from(result.values());
};