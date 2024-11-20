class Graph {
  /**
   * Using adjacency list and hash map data structure to build a graph
   */
  adjacencyList: Map<string, any[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.get(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
}

const graph = new Graph();
graph.addVertex('John');
graph.addVertex('Doe');
graph.addVertex('Lucy');
console.log(graph);
