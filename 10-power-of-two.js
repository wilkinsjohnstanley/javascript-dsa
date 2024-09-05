/*
Give a positive integer 'n', determine if the number is a power of 2 or not. An integer is a power of two if there exists an integer 'x' such that 'n' === 2
isPowerOfTwo(1) = true (2^0)
isPowerOfTwo(2) = true (2^1)
*/

function isPowerOfTwo(n) {
    if(n==1){
        return true
    }
    else if (n%2 == 0 ){
        return true
    } else if (n%2 ==1){
        return false
    }
}

console.log(isPowerOfTwo(2)) // returns true
console.log(isPowerOfTwo(3)) //returns false