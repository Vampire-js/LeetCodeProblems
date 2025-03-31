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
var middleNode = function(head) {
    let ans = []
    function trav(n){
        if(n == null) return
        ans.push(n)
        trav(n.next)
    }
    trav(head)

    return ans.length%2 == 0 ? ans[(ans.length/2)] : ans[(ans.length+1)/2 -1]
};