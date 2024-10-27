class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.length) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let first = new SinglyLinkedList();
first.push('Hi');
first.push('there');
first.push("I'm");
first.push('John');
console.log(first);
console.log(first.pop());
console.log(first.push('Lily'));
console.log(first.pop());
console.log(first.pop());
console.log(first.pop());
console.log(first.pop());
console.log(first);
