class QueueNode {
  val: string;
  priority: number;

  constructor(val: string, priority: number) {
    this.priority = priority;
    this.val = val;
  }
}

class PriorityQueue {
  values: QueueNode[];

  constructor() {
    this.values = [];
  }

  enqueue(val: string, priority: number) {
    let newNode = new QueueNode(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let currIdx = this.values.length - 1;
    const insertedNode = this.values[currIdx];
    while (currIdx > 0) {
      const parentIdx = Math.floor((currIdx - 1) / 2);
      const parentNode = this.values[parentIdx];
      if (insertedNode.priority >= parentNode.priority) break;
      this.values[currIdx] = parentNode;
      this.values[parentIdx] = insertedNode;
      currIdx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let currIdx = 0;
    const len = this.values.length;
    const bubbleNode = this.values[0];
    while (true) {
      const leftNodeIdx = currIdx * 2 + 1;
      const rightNodeIdx = currIdx + 1;
      let leftChildNode: QueueNode | undefined,
        rightChildNode: typeof leftChildNode;
      let swap = null;
      if (leftNodeIdx < len) {
        leftChildNode = this.values[leftNodeIdx];
        if (leftChildNode.priority < bubbleNode.priority) {
          swap = leftNodeIdx;
        }
      }
      if (rightNodeIdx < len) {
        rightChildNode = this.values[rightNodeIdx];
        if (
          (!swap && rightChildNode.priority < bubbleNode.priority) ||
          (swap && rightChildNode.priority < leftChildNode.priority)
        ) {
          swap = rightNodeIdx;
        }
      }
      if (!swap) break;
      this.values[currIdx] = this.values[swap];
      this.values[swap] = bubbleNode;
      currIdx = swap;
    }
  }
}

const ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

console.log(ER.dequeue());
