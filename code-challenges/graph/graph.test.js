'use strict';

const Graph = require('./graph.js');

describe('Testing Graph file', () => {
  it('can add a node', () => {
    let MyGraph = new Graph();
    let response = MyGraph.addNode('hello');
    expect(response).toStrictEqual(['hello']);
  });
  
  it('can add an edge', () => {
    let myGraph = new Graph();
     myGraph.addNode(4);
     myGraph.addNode(5);
     myGraph.addEdge(4, 5)
  

    expect(myGraph.getNodes).toStrictEqual({edges: { '4': [ [Object] ], '5': [ [Object] ] },
      nodes: [ 4, 5 ]
    });
  })
})