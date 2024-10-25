/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  function place(arr, n){
    let left = 0
    let right = arr.length -1

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] < n){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    let newarr = []
    if(arr[left] < n){
newarr = [
    ...arr.slice(0, left+1),
    n,
    ...arr.slice(left+1)
];
    }else{
        newarr = [
    ...arr.slice(0, left),
    n,
    ...arr.slice(left)
];
    }


return newarr

  }
  //[3,5,9] , 4

for(let i=0; i<nums2.length; i++){
nums1 = place(nums1, nums2[i])

}

console.log(nums1)

if(nums1.length%2 != 0){
    console.log(nums1[(nums1.length - 1)/2])
    return nums1[(nums1.length - 1)/2]
}else{
    return  (nums1[nums1.length/2] + nums1[(nums1.length/2) - 1] )/2
}
};