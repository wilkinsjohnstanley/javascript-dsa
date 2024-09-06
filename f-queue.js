class Queue{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0
    }
    enqueue(element){
        this.items.push(element)
        this.rear++
    }
    dequeue(){
        //return this.items.shift()
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        //return this.items.length === 0 
        return this.rear - this.front === 0
    }
    peek(){
        // if(!this.isEmpty()){
        //     return this.items[0]
        // }
        // return null
        return this.items[this.front]
    }

    size(){
        //return this.items.length
        return this.rear - this.front
    }
    print(){
        console.log(this.items.toString())
    }
}