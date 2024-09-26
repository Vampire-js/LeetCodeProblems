/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let arr = []
    while (head) {

        arr.push(head.val)
        head = head.next
    }
    let sum = 0
   let left = 0
   let right = arr.length -1 
   while(left < right){
    if(arr[left] + arr[right] >= sum){
        sum = arr[left] + arr[right]
    }
    left++
    right--
   }
    return sum
};
