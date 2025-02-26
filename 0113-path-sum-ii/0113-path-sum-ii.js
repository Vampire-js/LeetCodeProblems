var pathSum = function(root, targetSum) {
    let ans = [];
    
    function sum(r, s, a) {
        if (r == null) return;
        
        s += r.val;
        a = [...a, r.val]; 
        
        if (r.left == null && r.right == null) {
            if (s == targetSum) ans.push(a);
            return;
        }
        
        sum(r.left, s, a);
        sum(r.right, s, a);
    }  
    
    sum(root, 0, []);
    return ans;
};
