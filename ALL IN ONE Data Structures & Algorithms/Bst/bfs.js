class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = [];
        }
        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = [];
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); 
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set();
        visited.add(start);

        //after the takinh into data delete and same for every element>>>>>>
        while (queue.length > 0) {
            const current = queue.shift();//remvoe the first element>>>
            console.log(current);

            for (let neighbor of this.adjacencyList[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}


const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('C', 'G');
graph.addEdge('E', 'H');

graph.bfs('A'); 
