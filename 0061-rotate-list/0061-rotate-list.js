/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null) return head
    if(k == 0) return head
    let h = head
    let count = 1
    let curr = 0
    let ans = null
    function trav(l){
        if(l.next == null){
            l.next = head
            return
        }
        count++
        trav(l.next)
    }
    function rotate(l){
        if(l == null) {
            return
        }
        
        curr += 1
        if(count - (k)%count == curr){
            ans = l.next
            l.next = null
            return
        }
        rotate(l.next)
    }
    trav(h)
    rotate(head)
    
    return ans
};