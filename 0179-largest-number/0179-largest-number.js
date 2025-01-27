/**
 * @param {number[]} nums
 * @return {string}
 */
function compare(n1, n2) {
    if (parseInt(`${n1}${n2}`) > parseInt(`${n2}${n1}`)) { return true }
    return false
}

function partition(arr, low, high) {
    const pivot = arr[high]; 
    let i = low;

    for (let j = low; j < high; j++) {
        if (compare(arr[j], pivot)) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}


var largestNumber = function (nums) {
    quickSort(nums, 0, nums.length -1)

    if(nums[0] == "0") return "0"
    return nums.join('');
};