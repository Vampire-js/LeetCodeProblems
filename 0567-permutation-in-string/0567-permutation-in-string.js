var checkInclusion = function(s1, s2) {
    let len = s1.length;
    let arr = [];
    let map = new Map(); 


    for (let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let currentMap = new Map(); 

    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];


        if (map.has(char)) {
            arr.push(i);
            currentMap.set(char, (currentMap.get(char) || 0) + 1);
        } else {
            
            arr = [];
            currentMap.clear();
        }


        if (arr.length === len) {
            let valid = true;


            for (let [key, val] of map) {
                if (currentMap.get(key) !== val) {
                    valid = false;
                    break;
                }
            }

            if (valid) return true;


            const firstChar = s2[arr.shift()];
            if (currentMap.get(firstChar) === 1) {
                currentMap.delete(firstChar);
            } else {
                currentMap.set(firstChar, currentMap.get(firstChar) - 1);
            }
        }
    }

    return false;
};
