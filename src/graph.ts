class Graph {
  /**
   * Using adjacency list and hash map data structure to build a graph
   */
  adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.get(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1: string, v2: string) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  removeEdge(v1: string, v2: string) {
    this.adjacencyList.set(
      v1,
      this.adjacencyList.get(v1).filter((v) => v !== v2),
    );
    this.adjacencyList.set(
      v2,
      this.adjacencyList.get(v2).filter((v) => v !== v1),
    );
  }
}

const graph = new Graph();
graph.addVertex('Hanoi');
graph.addVertex('Ho Chi Minh');
graph.addVertex('Da Nang');
graph.addEdge('Hanoi', 'Da Nang');
graph.addEdge('Hanoi', 'Ho Chi Minh');
console.log(graph);
graph.removeEdge('Hanoi', 'Ho Chi Minh');
graph.removeEdge('Hanoi', 'Da Nang');
console.log(graph);
