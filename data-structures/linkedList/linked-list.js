'use strict';

class Node {
  constructor (val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// Need Try Catches for these
class LinkedList {
  constructor () {
    //default linked list is empty
    this.head = undefined;
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    }

  includes(val){
    let current = this.head;
    while(current != null) {
      if(val === current.val) {
        // current = current.next;
        console.log(val, true);
        return true
      }
      else {
        current = current.next;
        console.log(val, false);
      }
    }
    return false
  }

  toString() {
    let current = this.head;
    let str = '';
    while(current != null) {
      str += '[' + current.val + '] -> ';
      current = current.next
    }
    str += 'null';
    console.log(str)
    return str;
  }
}

// let myList = new LinkedList();

// myList.insert('A');
// myList.insert('B');
// myList.insert('C');
// myList.insert('D');
// myList.insert('E');

// myList.includes('B');
// myList.includes('F');

// myList.toString();

module.exports = { Node, LinkedList };
