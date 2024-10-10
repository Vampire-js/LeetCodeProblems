/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let list = new ListNode(0, head)
    let c = list
    let l = head
    
    while (l && l.next) {
        let a = l.next.next
        let b = l.next

        l.next = a
        b.next = l
        c.next = b

        c = l
        l = a
    }

    return list.next
};