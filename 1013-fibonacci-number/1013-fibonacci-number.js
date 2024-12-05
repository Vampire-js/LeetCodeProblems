function fib(n){
    if(n == 1){
 return 1
    }
    if(n == 0) return 0
let x = fib(n-1)
let y = fib(n-2)

return x+y
}
