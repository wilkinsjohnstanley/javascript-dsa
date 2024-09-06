const map = new Map([['a', 1], ['b', 2]])
map.set('c', 3)
//map.delete('c')
console.log(map.has('a'))

//map.clear()

for(const [key, value] of map){
    console.log(`${key}: ${value}`)
}

console.log("The size is: ", map.size)