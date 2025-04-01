/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head !== null && head.val === val) {
        head = head.next;
    }

    let prev = null
     function trav(n) {
        if (n == null) return;
        let temp = n.next;
        if (n.val == val) {
            if (prev) {
                prev.next = n.next;
                n.next = null;
            }
        } else {
            prev = n;
        }
        trav(temp);
    }
    
    trav(head)
    return head
};