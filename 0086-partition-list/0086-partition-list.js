var partition = function(head, x) {
   let before = new ListNode(0)
   let after = new ListNode(0)
let a = after
let b = before
   while(head){
    if(head.val >= x){
        a.next = head
        a = a.next
    }else{
        b.next = head
        b = b.next
    }
    head = head.next
   }
   a.next = null
   b.next = after.next

   return before.next
};
