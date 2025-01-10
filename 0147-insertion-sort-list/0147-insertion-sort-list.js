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


var insertionSortList = function(head) {
let curr = head
let ans = new ListNode()


while(curr){

    let p = ans;
    while(p.next && p.next.val <= curr.val){
        p = p.next
    }


let a = curr.next
    curr.next = p.next
    p.next = curr

    curr = a
}

return ans.next
};