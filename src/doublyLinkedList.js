class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  shift() {
    if (!this.length) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current, count;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (!foundNode) {
      return false;
    }
    foundNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = temp;
    temp.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop(idx);
    const foundNode = this.get(idx);
    const nextNode = foundNode.next;
    const prevNode = foundNode.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}

// 1 -> 2 -> 3
// 0

const first = new DoublyLinkedList();
first.push('Hi');
first.push("I'm");
first.push('John');
// first.pop();
// first.pop();
// first.pop();
first.shift();
first.unshift('Hello');
first.set(2, 'Lilly');
first.insert(0, 'apple');
console.log(first.remove(3));
first.remove(1);
console.log(first.head);
