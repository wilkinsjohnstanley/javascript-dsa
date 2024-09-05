function fibonacci(n){
    const fib = [0, 1]
    for ( let i = 2; i < n; i++){
//the previous two numbers will be the index minus one and minus two respectively.         
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
    
}

console.log(fibonacci(7))

//try tracing the execution with a pen and paper


//big O is O(n) Linear time complexity. 
//s