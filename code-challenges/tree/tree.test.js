'use strict';


const BSTree = require('./binarySearchTree.js');
let newTree = BSTree.BinarySearchTree



// You can search a binary search tree for a value and get the correct true/false result

describe ('All is well', () => {
  
  it ('can successfully instantiate an empty tree', () => {
    let tree = new newTree();
    expect(BSTree.BinarySearchTree.contains()).toBe(false);
  });

  it ('You can successfully instantiate a tree and add a single root node', () => {
    let tree = new BSTree.BinarySearchTree();
    tree.add(5);
    expect(tree.contains(5, tree.root)).toBe(true);
  });

  it ('can successfully add a left and right child to a single root node', () => {
    let tree = new BSTree.BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
    expect(tree.contains(5, tree.root)).toBe(true);
  });
  

  it ('can successfully do a preOrder traversal', () => {
    let tree = new BSTree.BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
  
    expect(tree.preOrder(tree.root)).toBe([5,2,3])
  });

  it ('can successfully do an inOrder traversal', () => {
    let tree = new BSTree.BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
  
    expect(tree.inOrder(tree.root)).toBe([2,5,3])
  });

  it ('can successfully do a postOrder traversal', () => {
    let tree = new BSTree.BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
  
    expect(tree.postOrder(tree.root)).toBe([2,3,5])

  });

  it ('can successfully add a value to a binary search tree', () => {
    let tree = new BSTree.BinarySearchTree();
    expect(tree.add(5)).not.toThrow();

  })

  it ('can search a binary search tree for a value and get the correct true/false result', () => {
    let tree = new BSTree.BinarySearchTree();
    tree.add(5);
    expect(tree.contains(5,tree.root)).toBe(true);
  });

})