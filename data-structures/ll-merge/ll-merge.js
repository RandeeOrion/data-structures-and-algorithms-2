'use strict';

// -----Module-----

let linkedListFile = require('../linkedList/linked-list.js');

// -----Classes-----

let Node = linkedListFile.Node;
let LinkedList = linkedListFile.LinkedList;


// -----Seed data-----

let listOne = new LinkedList();
let listTwo = new LinkedList();

listOne.insert('a');
listOne.append('b');
listOne.append('c');

listTwo.insert('1');
listTwo.append('2');
listTwo.append('3');

// -----Function to make it work-----
function mergeList(one, two){
  if(!one) return two;
  if(!two) return one;

  let zipper = new LinkedList();
  let curZip = zipper.head;
  let curOne = one.head;
  let curTwo = two.head;

  while (curOne.next !== null || curTwo.next !== null) {

  }
  return zipper;
}



// -----Calling the function-----

mergeList(listOne, listTwo);






