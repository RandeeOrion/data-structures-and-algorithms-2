'use strict';


const Node = require('./node.js')



class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    let tempArr = []; 

    tempArr.push(root.val); 

    if (root.left) {
      tempArr = [...tempArr, ...this.preOrder(root.left)]
    }

    if (root.right){
      tempArr = [...tempArr, ...this.preOrder(root.right)];
    }
    // console.log('preOrder Array', tempArr);
    return tempArr;
  }

  inOrder(root) {
    let tempArr = [];
    
    if (root.left) {
      tempArr = [...tempArr, ...this.inOrder(root.left)]
    }  
  
    tempArr.push(root.val); 

    if (root.right){
       tempArr = [...tempArr, ...this.inOrder(root.right)];
    }
    // console.log('inOrder array', tempArr);
    return tempArr;
  }

  postOrder(root) {
    let tempArr = [];
    
    if (root.left) {
      tempArr = [...tempArr, ...this.postOrder(root.left)]
    }  
  
    if (root.right){
       tempArr = [...tempArr, ...this.postOrder(root.right)];
    }
    
    tempArr.push(root.val); 

    console.log('postOrder', tempArr);
    return tempArr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(val) {
    // A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while(currentNode){
        if (newNode.val < currentNode.val) {

          if (!currentNode.left){
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (newNode.val > currentNode.val) {

          if (!currentNode.right){
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log('Sorry, that value doesn\'nt work!');
          break;
        }
      }
    }
  }

  contains(num, node) {
    let currentNode = node;

    if (currentNode.val === num) return true;

    if (currentNode.val > num && currentNode.left) {
      currentNode = currentNode.left;
      return this.contains(num, currentNode);
    }

    if (currentNode.val < num && currentNode.right){
      currentNode = currentNode.right;
      return this.contains(num, currentNode);
    }

    if(!currentNode.left && !currentNode.right) return false;
  }
}

// let tree = new BinarySearchTree();
// tree.add(5);

// tree.add(3);
// tree.add(2);
// tree.add(4);

// tree.add(8);
// tree.add(7);
// tree.add(9);

// tree.preOrder(tree.root);
// tree.inOrder(tree.root);
// tree.postOrder(tree.root);

// tree.contains(5, tree.root);
// tree.contains(2, tree.root);
// tree.contains(8, tree.root);
// tree.contains(20, tree.root);

module.exports = { Node, BinaryTree, BinarySearchTree};