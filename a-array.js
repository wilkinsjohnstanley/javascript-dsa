const arr = [1, 2, 3, 'John']
arr.push(4)
arr.unshift(0) //Inserts new elements at the start of an array, and returns the new length of the array.
//arr.pop()
arr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//for of will loop over everything
for(const item of arr){
    console.log(item)
}