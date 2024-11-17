class QueueNode {
  val: string;
  priority: number;

  constructor(val: string, priority: number) {
    this.priority = priority;
    this.val = val;
  }
}

/**
 * @description Priority Queue data structure based on min-binary heap
 * @constructor PriorityQueue
 * @param values an array contain priority nodes
 * @method enqueue adds a priority node to the queue and fixes its position
 * based on priority property
 * @method dequeue removes the highest priority level out of the queue
 * and re-arrange the remaining priority nodes
 */
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
      this.sinkDownRecursively();
    }
    return min;
  }

  sinkDown() {
    let currIdx = 0;
    const len = this.values.length;
    const bubbleNode = this.values[0];
    while (true) {
      const leftNodeIdx = currIdx * 2 + 1;
      const rightNodeIdx = leftNodeIdx + 1;
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

  sinkDownRecursively(currIndex = 0) {
    const len = this.values.length;
    const bubbledNode = this.values[currIndex];
    const leftChildNodeIdx = currIndex * 2 + 1;
    const rightChildNodeIdx = leftChildNodeIdx + 1;
    let swap: number | null = null;
    if (leftChildNodeIdx < len) {
      const leftChildNode = this.values[leftChildNodeIdx];
      if (leftChildNode.priority < bubbledNode.priority)
        swap = leftChildNodeIdx;
    }
    if (rightChildNodeIdx < len) {
      const rightChildNode = this.values[rightChildNodeIdx];
      if (
        (!swap && rightChildNode.priority < bubbledNode.priority) ||
        (swap && rightChildNode.priority < this.values[swap].priority)
      )
        swap = rightChildNodeIdx;
    }
    if (swap) {
      /**
       * if we do have swap (not falsy) => swap the bubbled node with the node in
       * the swap index
       */
      this.values[currIndex] = this.values[swap];
      this.values[swap] = bubbledNode;
      /**
       * invoke the sinkDownRecursively recursively with the param is the new swap index
       */
      this.sinkDownRecursively(swap);
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
