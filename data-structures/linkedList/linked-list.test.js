'use strict';


// You can insert multiple Nodes into the list successfully


// Your toString() function prints out your LinkedList in an expected way


let linkedLIstContent = require('./linked-list.js');
let LinkedList = linkedLIstContent.LinkedList;

describe('passes all lab tests', () => {

  it('the toString function will return a proper string ', () => {
    let pleaseWork = new LinkedList();
    pleaseWork.insert('B');
    expect(pleaseWork.toString()).toBe('[B] -> null')
  });

  it('Makes a new list',  () => {
    expect(() => {
    new LinkedList();
    }).not.toThrow();
  });

  it('can properly insert a value into hte list', () => {
    let newList = new LinkedList();
    newList.insert('A');
    expect(newList.head.val).toBe('A');
  });

  it('head property will correctly point to the head', () => {
    let newList = new LinkedList();
    newList.insert('A');
    expect(newList.head.val).toBe('A');
  });

  it('can find a value', () => {
    let multiple = new LinkedList();
    multiple.insert('A');
    multiple.insert('B');
    multiple.insert('C');
    expect(multiple.includes('B')).toBeTruthy();
  });

  it('can tell when there is not a value', () => {
    let multiple = new LinkedList();
    multiple.insert('A');
    multiple.insert('B');
    multiple.insert('C');
    expect(multiple.includes('F')).not.toBeTruthy();
  })

  it('can add a node to the end of the list', () => {
    let append = new LinkedList();
    append.insert('A');
    append.append('D');
    expect(append.head.next.val).toBe('D');
  })

  it('add multiple nodes to the end', () => {
    let append = new LinkedList();
    append.insert('A');
    append.append('B');
    append.append('D');
    expect(append.head.next.next.val).toBe('D');
  })


  it('insert a node BEFORE a node in the list', () => {
    let before = new LinkedList();
    before.insert('A');
    before.insert('B');
    before.insertBefore('B', 'Z');
    expect(before.head.next.val).toBe('Z');
  })

  it('insert a node after a node ', () => {
    let after = new LinkedList();
    after.insert('A');
    after.insert('B');
    after.insertAfter('B', 'Z');
    console.log('')
    expect(after.head.next.val).toBe('Z');
  })
// Can successfully insert a node after the last node of the linked list


});



describe('test the kth method', () => {
  it('when K is greater than the length of the list', () => {
    let myList = new LinkedList();
    myList.insert('A');
    myList.insert('B')
    expect(myList.knthFromTheEnd(5)).toBe('Your Linked List is too short!');
  })

  it('when k and the length of the list are the same', () => {
    let myList = new LinkedList();
    myList.insert('A');
    myList.insert('B');
    myList.insert('C');
    myList.insert('D');
    expect(myList.knthFromTheEnd(4)).toBe('D');
  })

  it('when k is not a postive interger', () => {
    let myList = new LinkedList();
    myList.insert('A');
    myList.insert('B');
    myList.insert('C');
    expect(myList.knthFromTheEnd(-1)).toBe('Oups! You need a positive attitude to get a positive number.')
  })

  it('when the linked list is 1', () => {
    let myList = new LinkedList();
    myList.insert('A');
    expect(myList.knthFromTheEnd(1)).toBe('A');
  })

  it('when k and the length of the list are the same', () => {
    let myList = new LinkedList();
    myList.insert('A');
    myList.insert('B');
    myList.insert('C');
    myList.insert('D');
    expect(myList.knthFromTheEnd(3)).toBe('C');
  })
})
