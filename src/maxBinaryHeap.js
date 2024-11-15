class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const insertedElement = this.values[currentIndex];
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parent = this.values[parentIndex];
      if (insertedElement <= parent) break;
      this.values[currentIndex] = parent;
      this.values[parentIndex] = insertedElement;
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (!this.values.length) return undefined;
    let lastIndex = this.values.length - 1;
    const removedElement = this.values[0];
    this.values[0] = this.values[lastIndex];
    this.values.pop();
    this.sinkDown();
    return removedElement;
  }

  sinkDown() {
    let currentIndex = 0;
    const length = this.values.length;
    const currentElement = this.values[0];

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = leftChildIndex + 1;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > currentElement) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild > currentElement) ||
          (swap && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentElement;
      currentIndex = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
heap.insert(20);

console.log(heap);

// expected output in heap view:
//                           199
//               55                       41
//        39            45        12              33
//     1      18    27

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);

/** expected output:
 *                           55
 *                  45                41
 *             39        27      12         33
 *          1     18
 * */
