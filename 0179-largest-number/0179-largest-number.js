/**
 * @param {number[]} nums
 * @return {string}
 */
function compare(n1, n2) {
    if (parseInt(`${n1}${n2}`) > parseInt(`${n2}${n1}`)) { return true }
    return false
}

function qs(arr){
if(arr.length <= 1){
  return arr
}
let pivot = arr[arr.length -1]
let left = []
let right = []
for(let i=0; i<arr.length-1; i++){
  if(compare(arr[i], pivot)){
    left.push(arr[i])
  }
  if(!compare(arr[i], pivot)){
    right.push(arr[i])
  }
}
return [...qs(left), pivot, ...qs(right)]
}


var largestNumber = function (nums) {
nums = qs(nums)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length - 1 - i; j++) {
    //         if (!compare(nums[j], nums[j + 1])) {
    //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    //         }
    //     }
    // }

    let ans = ""
    let isZero = true
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            isZero = false
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (isZero) ans = "0"
        else ans += `${nums[i]}`
    }
    return ans
};