const obj = {
    name: 'Heisenberg',
    age: 25,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name)
    }
}
obj.hobby = 'chemistry'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()
//Object.keys()
//Object.values()