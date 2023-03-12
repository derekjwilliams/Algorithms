// perform a depth first search using adjacency list input and vertex to find
// see https://youtu.be/09_LlHjoEiY?t=1400s
// github for the tutorial https://github.com/williamfiset/algorithms

/* simple JS implementation first, with functional stack implementation */
import { stackPeek, stackPop, stackPush, stackGetIterator } from "./dataStructures/stackFunctional.js";
class Edge {
  /** @constructor
  * @param {number} from 
  * @param {number} to
  * @param {number} cost
  */
    constructor(from, to, cost) {
        this.from = from;
        this.to = to;
        this.cost = cost;
      }
  }
  
  /**
   * Perform a depth first search on a graph with n vertices from a starting point to count the number of vertices in a given component
   * @param {Map<number, Array<Edge>>} graph 
   * @param {number} start
   * @param {number} vertexCount ??
   */
  function depthFirstSearch(graph, start, vertexCount) {
  
    let count = 0;
    const visited = new Array(vertexCount)
    let stack;
  
    // push the start vertex onto the stack
    stack = stackPush(stack)(start); 
    // Start by visiting the starting vertex
    visited[start] = true;
    while (stack !== undefined) { // while stack is not empty
      const vertex = stackPeek(stack)
      stack = stackPop(stack)
      count++
      const edges = graph.get(vertex);
      if (edges != null) {
        edges.forEach((edge) => {
          // if the edge.to vertex is not in the array of visited then push onto the stack, and set to true in the visited array
          if (!visited[edge.to]) {
            stack = stackPush(stack)(edge.to);
            visited[edge.to] = true;
          }
        })
      }
    }
    return count
  }
  //example
  /**
   * Setup graph, by adding directed edges
   * @param {Map<number, Array<Edge>>} graph 
   * @param {number} from
   * @param {number} to
   * @param {number} cost
   */
  function addDirectedEdge(graph, from, to, cost) {
    let edges = graph.get(from);
    if (edges === undefined) {
      edges = new Array(); // array of edges
      graph.set(from, edges);
    }
    edges.push(new Edge(from, to, cost));
  }
  
  function run() {
  // Create a fully connected graph, ascii art sucks, see README.md for a nice mermaid diagram of the graph
    let graph = new Map();
    const numberOfVertices = 5;
    addDirectedEdge(graph, 0, 1, 4);   // vertex 0 to vertex 1 with cost of 4
    addDirectedEdge(graph, 0, 2, 5);   // vertex 0 to vertex 2 with cost of 5
    addDirectedEdge(graph, 1, 2, -2);  // vertex 1 to vertex 2 with cost of -2
    addDirectedEdge(graph, 1, 3, 6);   // vertex 1 to vertex 3 with cost of 6
    addDirectedEdge(graph, 2, 3, 1);   // vertex 2 to vertex 3 with cost of 6
    addDirectedEdge(graph, 2, 2, 10);  // vertex 2 to vertex 2 with cost of 10, this is an edge that points from vertex 2 to vertex 2
  
    const count = depthFirstSearch(graph, 0, numberOfVertices)
    console.log('vertexCount for 0', count) // should be 4
  }
  run();
  
  
  
  
  