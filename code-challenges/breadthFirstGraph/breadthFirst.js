'use strict';

let Queue = require('./queue.js')
let Graph = require('../graph/graph.js');

class BFG extends Graph {
  constructor(){
    super();
  }

  breadthFirst(node){
    // create a queue and add the first node
    let q = new Queue(this.nodes.length);
    let explored = [];

    q.enqueue(node);

    // Mark the first node as explored
    this.add(node);

    // Dequeing the queue
    while (!q.isEmpty()){
      let t = q.dequeue();

      console.log(t);

      // First we search for nodes this node is connected to
      let nodeEdges = this.edges[t];
      // then we filter out the nodes we have already explored
     //then we mark each unexplored node as explored and add it to the queue.
      nodeEdges.filter(n => !explored.has(n))
      .forEach(n => {
        explored.add(n);
        q.enqueue(n);
      });
     
    }
  }

}


module.exports = BFG;