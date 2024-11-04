class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    this.first = temp.next;
    this.size--;
    if (!this.size) {
      this.last = null;
    }
    return temp.value;
  }
}

const stack = new Stack();
console.log(stack.push(23));
console.log(stack.push(40));
console.log(stack.push(80));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
