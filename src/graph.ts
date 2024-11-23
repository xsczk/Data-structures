class Graph {
  /**
   * Using `adjacency list` and `hash map` data structure to build a graph
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

  removeVertex(v: string) {
    const connectionList = this.adjacencyList.get(v);
    for (const connection of connectionList) {
      this.removeEdge(v, connection);
    }
    this.adjacencyList.delete(v);
  }

  depthFirstRecursive(start: string) {
    const result: string[] = [];
    const visited: Map<string, boolean> = new Map();

    (function dfs(vertex: string) {
      if (!vertex) return null;
      visited.set(vertex, true);
      result.push(vertex);
      const neighbors: string[] = this.adjacencyList.get(vertex);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) return dfs.bind(this)(neighbor);
      });
    }).bind(this)(start);
    return result;
  }

  depthFirstIterative(start: string) {
    const result: string[] = [];
    const stack: string[] = [start];
    const visited: Map<string, boolean> = new Map();
    visited.set(start, true);
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);
      const neighbors = this.adjacencyList.get(vertex);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex('Hanoi');
graph.addVertex('Ho Chi Minh');
graph.addVertex('Da Nang');
graph.addVertex('Los Angeles');
graph.addVertex('New York');
graph.addVertex('London');
graph.addEdge('Hanoi', 'Da Nang');
graph.addEdge('Hanoi', 'Ho Chi Minh');
graph.addEdge('Hanoi', 'London');
graph.addEdge('Hanoi', 'Los Angeles');
graph.addEdge('Los Angeles', 'New York');
graph.addEdge('Los Angeles', 'Ho Chi Minh');
graph.addEdge('Los Angeles', 'Da Nang');
graph.addEdge('London', 'Da Nang');
graph.addEdge('London', 'Ho Chi Minh');
graph.addEdge('New York', 'Da Nang');
graph.removeVertex('Hanoi');

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstIterative('A'));
