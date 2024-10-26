/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let arr = `${x}`.split('')


    let left = 0
    let right = arr.length - 1

    console.log(arr[0])
    if (arr[0] == "-") {
        left = 1
    } else {
        left = 0
    }
    while (left + 1 <= right) {
        let a = arr[left]
        arr[left] = arr[right]
        arr[right] = a

        left++
        right--
    }


    console.log(arr)
    arr = parseInt(arr.join(''))

if(Math.abs(arr) >= 2147483648){
return 0
}else{
    return arr
}
};