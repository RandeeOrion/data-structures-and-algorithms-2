'use strict';


const trees = require('./tree.js');
let BT = trees.BinaryTree;
let BST = trees.BinarySearchTree;

describe('Binary Trees breadthFirst function', () => {
  it('can hand a single node', () => {
    let tree = new BT();
    tree.add(5);
    expect(tree.breadthFirst()).toReturn(5);
  });
  
  it('can handle a regular tree', () => {
    let tree = new BT();
    tree.add(5)

    tree.add(4);
    tree.add(3);
    tree.add(2);

    tree.add(6);
    tree.add(7);

    expect(tree.breadthFirst()).toReturn(5,4,6,3,2,7);
  })

})


describe('Binary Tree tests', () => {
  it('can successfully instantiate an empty tree', () => {
    let tree = new BST();
    expect(tree).toBeDefined();
    expect(tree.root).toBe(null);
  })
})

describe ('All is well', () => {
  
  it ('can successfully instantiate an empty tree', () => {
    let tree = new BST();
    expect(BST.contains()).toBe(null);
  });

  it ('You can successfully instantiate a tree and add a single root node', () => {
    let tree = new BST();
    tree.add(5);
    expect(tree.contains(5, tree.root)).toBe(true);
  });

  it ('can successfully add a left and right child to a single root node', () => {
    let tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(2);
    expect(tree.contains(5, tree.root)).toBe(true);
  });
  

  it ('can successfully do a preOrder traversal', () => {
    let tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(2);
  
    expect(tree.preOrder(tree.root)).toBe([5,2,3])
  });

  it ('can successfully do an inOrder traversal', () => {
    let tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(2);
  
    expect(tree.inOrder(tree.root)).toBe([2,5,3])
  });

  it ('can successfully do a postOrder traversal', () => {
    let tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(2);
  
    expect(tree.postOrder(tree.root)).toBe([2,3,5])

  });

  it ('can successfully add a value to a binary search tree', () => {
    let tree = new BST();
    expect(tree.add(5)).not.toThrow();

  })

  it ('can search a binary search tree for a value and get the correct true/false result', () => {
    let tree = new BST();
    tree.add(5);
    expect(tree.contains(5,tree.root)).toBe(true);
  });

})