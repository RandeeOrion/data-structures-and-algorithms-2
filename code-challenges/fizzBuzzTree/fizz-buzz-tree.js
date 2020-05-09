'use strict';

const BT = require('../tree/binarySearchTree.js').BinaryTree;

class Node {
  constructor (val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}


let treeRoot = new Node(4);

treeRoot.right = new Node(5);
treeRoot.right.right = new Node(6);
treeRoot.right.left = new Node(7);

treeRoot.left = new Node(9);
treeRoot.left.left = new Node(3);
treeRoot.left.right = new Node(2);

const fizBuzz = (node) => {
  //Variables to make this easier, a new tree and a string to concat whatever is needed for the value of the new nodes in the new tree
  let str = '';

  //checking the value of the current node and reassigning value where needed
  if(node.val % 2 === 0) str += 'Fizz';
  if(node.val % 3 === 0) str += 'Buzz';
  if(node.val % 3 !== 0 && node.val % 2 !== 0) str = `${node.val}`;

  // creating the new node for the new tree
  let newTreeRoot = new Node(str);

  //writing the new tree using recursion 
  if(node.left) {
    newTreeRoot.left = fizzBuzz(node.left)
  }

  if(node.right) {
    newTreeRoot.right = fizzBuzz(node.right);
  }

  return newTreeRoot;
}