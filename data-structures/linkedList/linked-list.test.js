'use strict';

// Your LinkedList can successfully instantiate an empty list
// You can properly insert a value into the list
// Your LinkedList head property will correctly point to the beginning of the list
// You can insert multiple Nodes into the list successfully
// Your includes() function correctly finds a value in the list that exists
// Your includes() function correctly returns false when a value is not in the list
// Your toString() function prints out your LinkedList in an expected way


let linkedLIstContent = require('./linked-list.js');
let LinkedList = new linkedLIstContent.LinkedList();

describe('passes all lab tests', () => {
  it('Makes a new list',  () => {
    expect(() => {
    LinkedList;
    }).not.toThrow();
  });

  it('can properly insert a value into hte list', () => {
    let newList = LinkedList;
    newList.addToBeginning('A');
    let str = newList.printList();

    expect(str).toBe('[A] -> null');
  });

  it('head property will correctly point to the head', () => {
    let newList = LinkedList;
    newList.addToBeginning('A');
    expect(newList.head.val).toBe('A');
  });
})
