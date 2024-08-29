/*
Given a natural number 'n', determine if the number is prime or not.
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 

isPrime(5) //true because it can only be express as 1*5 or 5*1
//it is not the product of two smaller natural numbers.

isPrime(4) //false
//because 2*2 or 4*1
*/
function isPrime(n){
    if(n<2){
        return false
    }

    for(let i = 2; i<=n; i++){
        if(n%i===0){
            return false
        }
    }

    return true
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(isPrime(4)) //false

/* My first mistake 
was not intuiting that the return statement 
would simply be "return true" or "return false"
and that there can be multiple return statements inside different conditionals
*/