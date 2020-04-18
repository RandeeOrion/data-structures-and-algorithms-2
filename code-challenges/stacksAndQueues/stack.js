'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
   let nodeToPush = new Node(val);
   if (this.isEmpty()) {
     this.top = nodeToPush;
     return;
   } else {
     nodeToPush.next = this.top;
     this.top = nodeToPush;
   }
  }

  pop() {
    let nodeToPop = this.top;
    if (this.isEmpty()) {
      throw 'blah';
    }
    this.top = this.top.next
    nodeToPop.next = null;
    return nodeToPop;
  }

  peek() {
    if (this.top) return this.top.val;
    throw 'blah';
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = Stack;