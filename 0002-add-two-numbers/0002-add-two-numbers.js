/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = '';
    let n2 = '';

    while (l1) {
        n1 += `${l1.val}`;
        l1 = l1.next;
    }

    while (l2) {
        n2 += `${l2.val}`;
        l2 = l2.next;
    }


    n1 = BigInt(n1.split('').reverse().join(''));
    n2 = BigInt(n2.split('').reverse().join(''));


    let ans = (n1 + n2).toString().split('').reverse(); 

    let head = new ListNode(parseInt(ans[0]));
    let mover = head;

    for (let i = 1; i < ans.length; i++) {
        mover.next = new ListNode(parseInt(ans[i]));
        mover = mover.next;
    }

    return head;
};
