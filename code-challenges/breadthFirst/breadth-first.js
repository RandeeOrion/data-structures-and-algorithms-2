'use strict';

// setting up to actually be able to test code, but in a whiteboard interview I would probably be able to assume these are available for my use and I wouldnt have to write them. 


class TreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    
    if(!this.front){
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {

    if(!this.front) return;

    let ogFront = this.front;
    this.front = this.front.next

    ogFront.next = null;
    return ogFront.val;

  }
}

// write a method on a BinaryTree class that returns an array with the values of the tree in a breadthFirst traversal

/*                5
              1       2
            3  4     5  6

    --> [5,1,2,3,4,5,6]
*/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(root = this.root) {

    //declare an empty array to stuff values into
    let printedArr = [];

    // checking for the edge case of no root
    if(!root) return;

    // setting up a new queue and brining in the tree root to begin traversal 
    let q = new Queue();
    q.enqueue(root); 


    // traversing over queue 
    while (q.front) {

      // adding children to queue first left then right so they can then be traversed through and dequeued

      if (q.front.val.left) {
        q.enqueue(q.front.val.left);
      }
      if(q.front.val.right) {
        q.enqueue(q.front.val.right);
      }

      // preparing dequeueing but storing that value of the node to add to the array
      let removedItem = q.dequeue().val;

      // adding the value of the dequeued node to the array
      printedArr[printedArr.length] = removedItem;

    }
   return printedArr;
  }
}

//bigO of N 

module.exports = { TreeNode, BinaryTree, Node };