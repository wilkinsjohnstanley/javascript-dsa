function fibonacci(n){
    const fib = [0, 1];
    for ( let i = 2; i < n; i++){
//the previous two numbers will be the index minus one and minus two respectively.         
        fib[i]=fib[i-1]+[i-2];
    }

    
}

fibonacci(2)
fibonacci(3)
fibonacci(7)