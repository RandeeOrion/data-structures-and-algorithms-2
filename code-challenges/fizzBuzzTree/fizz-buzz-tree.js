'use strict';

// Write a function that takes in a tree and changes the value to Fizz if the val is divisible by 3 to Buzz if it is divisible by 5 and FizzBuzz if it is divisible by 15 

//class that creates the node
class Node {
  constructor (val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}


const fizzBuzz = (node) => {
  //Variables to make this easier, a new tree and a string to concat whatever is needed for the value of the new nodes in the new tree
  let str = '';

  //checking the value of the current node and reassigning value where needed
  if(node.val % 3 === 0) str += 'Fizz';
  if(node.val % 5 === 0) str += 'Buzz';
  if(node.val % 3 !== 0 && node.val % 5 !== 0) str = `${node.val}`;

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


//exports for testing
module.exports = {Node, fizzBuzz};

// BigO of n