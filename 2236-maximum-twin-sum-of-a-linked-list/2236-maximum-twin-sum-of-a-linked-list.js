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

 let max = 0;
    for(let i=0; i<arr.length; i++){
        max = Math.max(max, (arr[i] + arr[arr.length-1-i]));
    }
    return max;
};
