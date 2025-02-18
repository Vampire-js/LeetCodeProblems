/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


var merge = function(nums1, m, nums2, n) {
    for(let i=m; i< m+n; i++){
        nums1[i] = nums2[i-m]
    }
    for(let i=0; i<m+n; i++){
        for(let j=0; j<m+n-i; j++){
            if(nums1[j-1] >= nums1[j]){
                let temp = nums1[j]
                nums1[j] = nums1[j-1]
                nums1[j-1] = temp
            }
        }
    }
};