'use strict';

let treeThings = require('./fizz-buzz-tree.js');
let BT = require('../tree/binarySearchTree.js').BinaryTree;

let Node = treeThings.Node;
let fizzBuzz = treeThings.fizzBuzz;


describe('checking to see if fizzBuzz will actually fizz and buzz', () => {
  it('checks to see if it will properly change a value when just a root exists', () => {
    let treeRoot = new Node(4);
    fizzBuzz(treeRoot);

    expect(fizzBuzz(treeRoot).val).toBe('4');
  });

  it('will handle a whole tree', () => {
    let treeRoot = new Node(4);
    treeRoot.left = new Node(2);
    treeRoot.left.left = new Node(15);
    treeRoot.left.right = new Node(9);
    treeRoot.right = new Node(30);
    treeRoot.right.left = new Node(10);

    expect(fizzBuzz(treeRoot).left.val).toBe('2');
    expect(fizzBuzz(treeRoot).right.val).toBe('FizzBuzz');
    expect(fizzBuzz(treeRoot).left.left.val).toBe('FizzBuzz');
    expect(fizzBuzz(treeRoot).left.right.val).toBe('Fizz');
    
  })

})