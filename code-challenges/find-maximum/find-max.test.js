'use strict';

let BT = require('./find-max.js').BinaryTree;
let Node = require('./find-max').Node;

describe('Testing Finding Max', () => {

  it('can test a fully functioning tree', () => {
    let tree = new BT();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(10);
    tree.root.left.right = new Node(6);

    expect(tree.findMaximumValue(tree.root)).toBe(10);
  });

  it('can tst a tree with just a root', () => {
    let tree = new BT();
    tree.root = new Node(1);

    expect(tree.findMaximumValue(tree.root)).toBe(1);
  });

  it('can test an empty tree', () => {
    let tree = new BT();

    expect(tree.findMaximumValue(tree)).toBe(0);
  })

  it('can test a tree with out a number value', () => {
    let tree = new BT();
    
    tree.root = new Node('Hello');

    expect(tree.findMaximumValue(tree.root)).toBe(0);
  })
})