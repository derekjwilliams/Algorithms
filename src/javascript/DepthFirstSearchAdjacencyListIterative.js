// perform a depth first search using adjacency list input and vertex to find
// see https://youtu.be/09_LlHjoEiY?t=1400s
// github for the tutorial https://github.com/williamfiset/algorithms

/* simple JS implementation first, then go to full functional */

class Stack {
  constructor() {
      this.items = [];
  }
  
  // add element to the stack
  push(element) {
      return this.items.push(element);
  }
  
  // remove element from the stack
  pop() {
      if(this.items.length !== 0) {
          return this.items.pop();
      }
  }
  
  // view the last element
  peek() {
      return this.items[this.items.length - 1];
  }
  
  // check if the stack is empty
  isEmpty(){
     return this.items.length === 0;
  }
 
  // the size of the stack
  size(){
      return this.items.length;
  }

  // empty the stack
  clear(){
      this.items = [];
  }
}

class Edge {
/** @constructor
* @param {int} from 
* @param {int} to
* @param {int} cost
*/
  constructor(from, to, cost) {
      this.from = from;
      this.to = to;
      this.cost = cost;
    }
}


/**
 * Perform a depth first search on a graph with n vertices from a starting point to count the number of vertices in a given component
 * @param {Map<Integer, List<Edge>>} graph 
 * @param {int} start
 * @param {int} n ??
 */
function depthFirstSearch(graph, start, n) {

  let count = 0;
  const visited = new Array(n)
  const stack = new Stack();

  // Start by visiting the starting vertex
  stack.push(start);
  visited[start] = true;

  while (!stack.isEmpty()) {
    const node = stack.pop();
    count++;
    let edges = graph.get(node);

    if (edges != null) {
      edges.forEach((edge) => {
        if (!visited[edge.to]) {
          stack.push(edge.to);
          visited[edge.to] = true;
        }
      });
    }
  }
  return count;
}
//example
/**
 * Helper method to setup graph
 * @param {Map<integer, List<Edge>>} graph 
 * @param {int} from
 * @param {int} to
 * @param {int} cost ??
 */
function addDirectedEdge(graph, from, to, cost) {
  //console.log(from, to, cost)
  let list = graph.get(from);
  if (list === undefined) {
    list = new Array(); // array of edges
    graph.set(from, list);
  }
  list.push(new Edge(from, to, cost));
}

function run() {
// Create a fully connected graph, ascii art sucks

//           (v0)
//           /  \
//         4/    \5
//         /      \
//        *        *
//       (v1)*----(v2)----|   (4)
//         \  -2  / *_____|
//         6\    /1    10
//           \  /
//            **
//           (v3)
//            
  let graph = new Map();
  const numberOfVertices = 5;
  addDirectedEdge(graph, 0, 1, 4);   // vertex 0 to vertex 1 with cost of 4
  addDirectedEdge(graph, 0, 2, 5);   // vertex 0 to vertex 2 with cost of 5
  addDirectedEdge(graph, 1, 2, -2);  // vertex 1 to vertex 2 with cost of -2
  addDirectedEdge(graph, 1, 3, 6);   // vertex 1 to vertex 3 with cost of 6
  addDirectedEdge(graph, 2, 3, 1);   // vertex 2 to vertex 3 with cost of 6
  addDirectedEdge(graph, 2, 2, 10);  // vertex 2 to vertex 2 with cost of 10, this is an edge that points from vertex 2 to vertex 2

  for (const [key, value] of graph) {
    console.log(`${key}: ${JSON.stringify(value)}`);
  }

  const vertexCounts = Array(
    depthFirstSearch(graph, 0, numberOfVertices), // should be 4
    depthFirstSearch(graph, 1, numberOfVertices), // should be 3
    depthFirstSearch(graph, 2, numberOfVertices), // should be 2
    depthFirstSearch(graph, 3, numberOfVertices), // should be 1
    depthFirstSearch(graph, 4, 3), // should be 1, why? there is no vertex 4
  )
  console.log(vertexCounts)

}
// console.log('here')
run();


