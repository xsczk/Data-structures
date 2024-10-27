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
      // if the linked list is empty, add new node to head and tail as well
      this.head = newNode;
      this.tail = this.head;
    } else {
      // add current tail dot next to new node and then mark the new tail to the new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let first = new SinglyLinkedList();
first.push('Hi');
first.push('there');
first.push("I'm");
first.push('John');
console.log(first.head);
