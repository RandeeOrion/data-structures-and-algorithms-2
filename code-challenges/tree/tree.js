'use strict';


// const Node = require('./node.js')
const Queue = require('../stacksAndQueues/queue.js');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right= null;
  }
}



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

   // Write a method inside the BT class that takes in a tree and does a breadthFirst traversal. 
  /*            6   
             4    5
            3 1   8 9

            will return 
            6 4 5 3 1 8 9
  */
 breadthFirst(root){
   // creates the new array and adds the value of the root
   let tempArr = [];
   let queue = new Queue();
   //need to set an index counter so we can add to temp array


   //queueing node to check for children
   queue.enqueue(root.val);
    while(!queue.isEmpty()){
      let thisNode = queue.dequeue();
      console.log('here', thisNode)
      // tampArr = [...tempArr, ...thisNode.val];
      if(thisNode.left || thisNode.right){
        queue.enqueue(thisNode.left);
        queue.enqueue(thisNode.right);
      }
    }
  
   console.log('Bread First Return Array ');
   console.log(tempArr);
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

let tree = new BinaryTree();
tree.root = new Node(5);

tree.root.left = new Node(3);
tree.root.left.right = new Node(2);
tree.root.left.left = new Node(4);

tree.root.right = new Node(8);
tree.root.right.left = new Node(7);
tree.root.right.right = new Node(9);

tree.breadthFirst(tree.root);

// tree.preOrder(tree.root);
// tree.inOrder(tree.root);
// tree.postOrder(tree.root);

// tree.contains(5, tree.root);
// tree.contains(2, tree.root);
// tree.contains(8, tree.root);
// tree.contains(20, tree.root);

module.exports = { Node, BinaryTree, BinarySearchTree};