class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
isEmpty(){
    return this.size === 0
}
getSize(){
    return this.size
}

//adds a node at the start when its empty
prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    } else {
        node.next = this.head
        this.head = node
    }
    this.size++
}


append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    } else {
        let prev = this.head
        while(prev.next){
            prev = prev.next 
        }
        prev.next = node
    }
    this.size++
}


//print from first node to last node
print(){
    if(this.isEmpty()){
        console.log('List is empty')
    } else {
        let curr = this.head
        let listValues = ''
        //advance current pointer when not null
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}

}
const list = new LinkedList()
console.log('List is empty? ', list.isEmpty())
console.log('List size: ', list.getSize())
list.print()
console.log('List is empty? ', list.isEmpty())
console.log('List size: ', list.getSize())
list.prepend(4)
list.print()
list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log('List is empty? ', list.isEmpty())
console.log('List size: ', list.getSize())
list.print()
list.prepend(1)
list.append(1)
console.log('List is empty? ', list.isEmpty())
console.log('List size: ', list.getSize())
list.print()
