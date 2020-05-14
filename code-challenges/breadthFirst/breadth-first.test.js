'use strict';

const Node = require('./breadth-first.js').TreeNode;
const BT = require('./breadth-first.js').BinaryTree;

describe('it works!', () => {
  it('prints out a decent sized tree', () => {
    let tree = new BT();

    tree.root = new Node(5);

    tree.root.left = new Node(1);
    tree.root.right = new Node(2);

    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(6);

    expect(tree.breadthFirst()).toEqual([5,1,2,3,4,5,6]);
  })
})