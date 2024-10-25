/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    function search(arr, n){
        arr.sort((a, b) => a - b);
        let left =0
        let right = arr.length -1
        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if(arr[mid] < n){
                left = mid + 1
            }else{
                right = mid -1
            }
        }
if(arr[left] != n){
    return false
}else{
    return true
}
    }
    
    let ans = []
    for(let i=0; i< nums2.length; i++){
        if(search(nums1, nums2[i])){
            if(!search(ans, nums2[i])){
                ans.push(nums2[i])
            }
        }
    }

    return ans
    //[1,1,2,2]
};