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
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);

console.log(heap);

// expected output in heap view:
//                           199
//               55                       41
//        39            45        12              33
//     1      18    27
