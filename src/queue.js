class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;
    const currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    if (!this.size) {
      this.last = null;
    }
    return currentFirst.val;
  }
}

const q = new Queue();
q.enqueue(12);
q.enqueue(13);
console.log(q.enqueue(14));
console.log(q.dequeue());
console.log(q);
