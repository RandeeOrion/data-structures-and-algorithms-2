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
    explored.push(node);

    if()

    // Dequeing the queue
    while (!q.isEmpty()){
      // if(!q.front) {
      //   console.log('this.front', q.front)
      //   return explored;
      // }
      console.log('JUST BEFORE THE FIREST DEWUC')
      let t = q.dequeue();
      if(explored.includes(this.getNeighbors(t))) return explored;


      // First we search for nodes this node is connected to
      let nodeEdges = this.getNeighbors(node);
      // then we filter out the nodes we have already explored
     //then we mark each unexplored node as explored and add it to the queue.
     console.log('NODE EDGES', nodeEdges)
      nodeEdges.filter(n => !explored.includes(n));
      console.log('AFTER FILTER')
      nodeEdges.forEach(n => {
        console.log('FIRST FOR EACH')
        console.log('N', n)
        explored.push(n);

        q.enqueue(n);
        console.log('THE Q', q)
      });
     
    }

    return explored;
  }

}


let myG = new BFG();

myG.addNode(7);
myG.addNode(3);
myG.addNode(2);
myG.addNode(8);
myG.addNode(11);
myG.addNode(9);

myG.addEdge(7,3);
myG.addEdge(7,2);
myG.addEdge(3,7);
myG.addEdge(3,8);
myG.addEdge(8,11);
myG.addEdge(11,9);

console.log(myG.breadthFirst(7))

module.exports = BFG;