class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Create the vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  // Assign the edges for the graph
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  // Remove the edge
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }

  // Remove the vertex
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    for (let neighbor of this.adjacencyList[vertex]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vertex
      );
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("B", "D");
g.addEdge("C", "A");
g.removeEdge("A", "B");
g.removeEdge("C", "A");
g.removeVertex("C");
console.log(g);
