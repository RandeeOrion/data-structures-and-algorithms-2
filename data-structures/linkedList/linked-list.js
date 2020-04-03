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

  append(val) {
    let current = this.head;
    if(!current){
      myList.insert('J');
    }
    while(current.next != null) {
        current = current.next;
      }
    let newNode = new Node(val);
    current.next = newNode;
  }

  insertBefore(val, newVal){
    let current = this.head;
    console.log(current);
    console.log(current.next.val, val)
    while(current.next.val !== val){
      console.log('inside while loop');
      current = current.next;
    }
    let newNode = new Node(newVal);
    current.prev = newNode;
  }

  
}

let myList = new LinkedList();

myList.insert('A');
myList.insert('B');
myList.insert('C');
myList.insert('D');
// myList.insert('E');

myList.includes('B');
myList.includes('F');

myList.append('Q'),
myList.insertBefore('B', 'E')

myList.toString();

module.exports = { Node, LinkedList };
