/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let a1 = arr
    let s = arr.join('')
    let s1 = arr.reverse().join('')
    console.log(s , s1)
    if(s ==s1){
        return true
    }
    else{
        return false
    }
};