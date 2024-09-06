class Stack {
    constructor() {
      this.items = [];
    }
  
    // Pushes an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Removes the top element from the stack and returns it
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    // Returns the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Clears all elements from the stack
    clear() {
      this.items = [];
    }
  
    // Prints the stack elements
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // Output: 3
  console.log(stack.pop());  // Output: 3
  console.log(stack.size()); // Output: 2
  stack.print();            // Output: 1,2
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  