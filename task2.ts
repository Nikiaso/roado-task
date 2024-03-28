class Graph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: number, vertex2: number) {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  dfs(startingVertex: number) {
    const visited: Set<number> = new Set();
    const dfsHelper = (vertex: number) => {
      visited.add(vertex);
      console.log(vertex);
      this.adjacencyList.get(vertex)?.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(startingVertex);
  }
}
