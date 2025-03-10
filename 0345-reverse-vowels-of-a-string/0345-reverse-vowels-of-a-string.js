function isVowel(a) {
    a = a.toLowerCase();
    return a === "a" || a === "e" || a === "i" || a === "o" || a === "u";
}

var reverseVowels = function(s) {
    let arr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isVowel(arr[left])) left++;
        while (left < right && !isVowel(arr[right])) right--;

        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr.join('');
};
