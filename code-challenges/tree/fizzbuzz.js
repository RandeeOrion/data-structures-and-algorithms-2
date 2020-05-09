'use strict';

let treeFile = require('./tree.js');

let tree = new treeFile.BinarySearchTree();

tree.add(5);

tree.add(3);
tree.add(2);
tree.add(4);

tree.add(8);
tree.add(7);
tree.add(9);


const fizzBuzz = (tree) => {
  if(!tree.root) return null;
  let newTree = new treeFile.BinarySearchTree()
  let node = tree.root
  while(node.left || node.right)
    let node = node.left : !node.left node.right;
  let node = tree.preOrder(tree.root)
  console.log('node.val', node.val);
  if(node % 15 === 0) newTree.add('FizzBuzz');
  else if (node % 3 === 0) newTree.add('Fizz');
  else if (node % 2 === 0) newTree.add('Buzz');
  else newTree.add(node.val);
  console.log('--------------------')
  console.log(newTree.root);
}

const fizzBuzzTreeTraversal = (root) => {
  let newTree = new treeFile.BinarySearchTree()
  //checking to see if the value of each node should be changed to FizzBuzz, Fizz, or Buzz before adding to new tree.
  if(root.val % 15 === 0) newTree.add('FizzBuzz');
  else if (root.val % 3 === 0) newTree.add('Fizz');
  else if (root.val % 2 === 0) newTree.add('Buzz');
  else newTree.add(root.val); 

    if (root.left) {
      tempArr = [...tempArr, ...this.preOrder(root.left)]
    }

    if (root.right){
      tempArr = [...tempArr, ...this.preOrder(root.right)];
    }

    return tempArr;
}

fizzBuzz(tree);