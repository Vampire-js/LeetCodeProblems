var pathSum = function (root, targetSum) {
    let ans = [];

    function sum(r, s, a) {
        if (r == null) return;

        s += r.val;
        a.push(r.val); 

        if (r.left == null && r.right == null) {
            if (s == targetSum) ans.push([...a]);
        }else{

        sum(r.left, s, a);
        sum(r.right, s, a);
        }

        a.pop()
 
    }

    sum(root, 0, []);
    return ans;
};