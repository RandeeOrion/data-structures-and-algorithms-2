'use strict'

class Graph {
  constructor() {
    this.edges = {};
    this.nodes = [];
  }

  addNode(val) {

    this.nodes.push(val);
    this.edges[val] = [];
    return this.nodes;
  }

  addEdge(node1, node2, weight = 1) {
 
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  getNodes() {
  // - Returns all of the nodes in the graph as a collection (set, list, or similar)
    let graph = '';

    this.nodes.forEach(node => {
      graph += node + ' -> ' + this.edges[node].map(n => n.node).join(', ') + '\n';
    });
    
    return graph;
  }

  getNeighbors(node) {
  // Returns a collection of edges connected to the given node. Takes in a given node. Include the weight of the connection in the returned collection
    return this.edges[node];
  }
  
  size() {}
  // - Returns the total number of nodes in the graph

}
// let myGraph = new Graph();
// myGraph.addNode(4);
// myGraph.addNode(5);
// let edge = myGraph.addEdge(4, 5);

module.exports = Graph;