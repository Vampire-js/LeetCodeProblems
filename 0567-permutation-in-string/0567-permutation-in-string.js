var checkInclusion = function(s1, s2) {
    let len = s1.length;
    let arr = [];
    let map = new Map(); // Track character frequencies of s1

    // Fill the frequency map for s1
    for (let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let currentMap = new Map(); // Map to track current window in s2

    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];

        // If the character exists in s1, track it
        if (map.has(char)) {
            arr.push(i);
            currentMap.set(char, (currentMap.get(char) || 0) + 1);
        } else {
            // If a character not in s1 is encountered, reset everything
            arr = [];
            currentMap.clear();
        }

        // If arr length reaches s1's length, check if it forms a valid permutation
        if (arr.length === len) {
            let valid = true;

            // Check if both maps are equal (valid permutation)
            for (let [key, val] of map) {
                if (currentMap.get(key) !== val) {
                    valid = false;
                    break;
                }
            }

            if (valid) return true;

            // Slide the window by removing the first character in arr
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
