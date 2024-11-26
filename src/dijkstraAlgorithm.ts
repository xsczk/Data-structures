type PriorityNode = { value: string; priority: number };

class PriorityQueue {
  values: PriorityNode[];

  constructor() {
    this.values = [];
  }

  enqueue(value: string, priority: number) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  adjacencyList: Map<string, { node: string; weight: number }[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1: string, v2: string, weight: number) {
    this.adjacencyList.get(v1).push({ node: v2, weight });
    this.adjacencyList.get(v2).push({ node: v1, weight });
  }

  /**
   *
   * @param start the starting point
   * @param finish the end point
   * @return an `array` that contain every points which expected to be the
   * shortest way to get from `start` to `finish`
   */
  DijkstraShortestPath(start: string, finish: string) {
    const nodes = new PriorityQueue();
    const distances = new Map<string, number>();
    const previous = new Map<string, string>();
    let smallest: Pick<PriorityNode, 'value'>['value'];

    /**
     * Build up initial state
     */
    for (const [vertex] of this.adjacencyList) {
      if (vertex === start) {
        distances.set(vertex, 0);
      } else {
        distances.set(vertex, Infinity);
      }
      nodes.enqueue(vertex, distances.get(vertex));
      previous.set(vertex, null);
    }

    /**
     * As long as there is something to visit
     */
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        //   Done => return the shortest path here!
      }
    }
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.DijkstraShortestPath('A', 'E');
