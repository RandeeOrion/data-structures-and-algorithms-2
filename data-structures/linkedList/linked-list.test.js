'use strict';


// You can insert multiple Nodes into the list successfully


// Your toString() function prints out your LinkedList in an expected way


let linkedLIstContent = require('./linked-list.js');
let LinkedList = new linkedLIstContent.LinkedList();

describe('passes all lab tests', () => {

  it('the toString function will return a proper string ', () => {
    let pleaseWork = LinkedList
    pleaseWork.insert('B');
    expect(pleaseWork.toString()).toBe('[B] -> null')
  });

  it('Makes a new list',  () => {
    expect(() => {
    LinkedList;
    }).not.toThrow();
  });

  it('can properly insert a value into hte list', () => {
    let newList = LinkedList;
    newList.insert('A');
    expect(newList.head.val).toBe('A');
  });

  it('head property will correctly point to the head', () => {
    let newList = LinkedList;
    newList.insert('A');
    expect(newList.head.val).toBe('A');
  });

  it('can find a value', () => {
    let multiple = LinkedList
    multiple.insert('A');
    multiple.insert('B');
    multiple.insert('C');
    console.log('-----------------');
    console.log('multiple', multiple);
    expect(multiple.includes('B')).toBeTruthy();
  });

  it('can tell when there is not a value', () => {
    let multiple = LinkedList
    multiple.insert('A');
    multiple.insert('B');
    multiple.insert('C');
    expect(multiple.includes('F')).not.toBeTruthy();
  })



})
