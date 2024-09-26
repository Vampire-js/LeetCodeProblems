/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = new ListNode()
    node.next = head
    let ans = node
    for(let i=0; i<n; i++){
        head = head.next
    }
    while(head){
        head = head.next
        ans = ans.next
    }
    ans.next = ans.next.next

    return node.next

};