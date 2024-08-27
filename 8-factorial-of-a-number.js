/*
Given an integer 'n', find the factoroial of that integer.
In mathematics, the factorial of a non-negative integer 'n'
is the product of all positive integers less than or equal to 'n'

for example:
factorial(4) is going to be equal to
4*3*2*1
which is 24
*/

function factorial(n){

    //don't use const, use let instead
    let fact = 1;
    for ( let i = 2; i <= n; i++){
        fact = fact*i
    }

//never forget to return, in fact, right this after you write the function
    return fact
}
console.log(factorial(4)) //24

//trace execution!

//This is O(n) Linear time complexity. 