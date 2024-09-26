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
    let fast = head
    let slow = head
let max= 0


    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }   
    fast = head
    slow = reverseList(slow)


    
    function reverseList(h){
        let current = h
        let prev = null
        while(current){
            let next=  current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
 
    while(slow){
      let sum = fast.val + slow.val;
        max = Math.max(sum,max);
        slow = slow.next;
        fast = fast.next;
    }

    return max
};
