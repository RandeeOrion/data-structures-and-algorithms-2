'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(val){
    let nodeToQueue = new Node(val);

    if(this.isEmpty()){
      this.front = nodeToQueue;
      this.rear = nodeToQueue;
      return;
    }

    this.rear.next = nodeToQueue;
    this.rear = nodeToQueue;
  }

  dequeue() {
    let workingNode = this.front;

    if(this.isEmpty()){
      throw 'Empty';
      return;
    }

    this.front = this.front.next;
    workingNode.next = null;

    return workingNode;
  }

  isEmpty(){
    return !this.front && !this.rear
  }
}

module.exports = Queue; 