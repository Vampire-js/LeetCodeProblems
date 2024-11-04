/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let left = 0
    let right = needle.length

    if (haystack.length < needle.length) {
        return -1
    }

    if (haystack == needle) {
        return 0
    }

    while (right <= haystack.length) {
        let substr = haystack.substring(left, right)


        if (substr == needle) {
            return left
        } else {
            left++
            right++

        }

    }


    return -1



};