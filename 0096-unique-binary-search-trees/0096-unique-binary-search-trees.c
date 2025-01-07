int numTrees(int n) {
 int trees[n+1];
 for(int i=0; i<n+1; i++){
    trees[i] = 1;
 }   
 for(int a=2; a<=n; a++){
    int ans = 0;
    for(int b=1; b<= a; b++){
        ans += trees[b-1]*trees[a-b];
    }
    trees[a] = ans;
 }

 return trees[n];
}