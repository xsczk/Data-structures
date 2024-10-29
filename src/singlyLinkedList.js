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

  shift() {
    if (!this.length) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.val = value;
    return true;
  }
}

let first = new SinglyLinkedList();
first.push('Hi');
first.push("I'm");
first.push('John');
console.log(first);
console.log(first.pop());
console.log(first.push('Lily'));
// console.log(first.pop());
console.log(first.shift());
console.log(first.unshift('Hello'));
console.log(first.push(':)'));
console.log(first.get(3));
console.log(first.set(3, '=)))'));
console.log(first);
