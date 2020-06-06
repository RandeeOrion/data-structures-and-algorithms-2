'use strict';


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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


  findMaximumValue(root) {

    //This is my first attempt and is the 'easy' way to solve this problem, assuming it is an extension of a BinaryTree class that already has a preOrder method built in. This, however takes twice as long as BigO(n) because we have to essentially traverse the tree twice. 

    // use preOrder to create an array of values and set maxVal to 0;
    let values = this.preOrder(root);
    let maxVal = 0;

    //iterate over the values and check against the maxVal reassigning when the value of the index being checked is larger than the previously set maxVal
    for (let i = 0; i < values.length; i ++) {
      if (maxVal < values[i]) maxVal = values[i];
    }

    console.log(maxVal);

    // returning maxVal
    return maxVal;



    // Here is a better version of the function that isn't working yet. I am hoping to get it working before this is due. 

    // let maxVal;
    // console.log('maxVal at the begining', maxVal);
    // if (maxVal === undefined) maxVal = root.val;
    // if (root.left) {
    //   if (maxVal < root.left.val) {
    //     console.log('root.left.val', root.left.val);
    //     maxVal = root.left.val;
    //     console.log('maxVal inside root.left if statement', maxVal);
    //   }
    //   this.findMaximumValue(root.left);
    // }

    // if (root.right) {
    //   if (maxVal < root.right.val) {
    //     maxVal = root.right.val;
    //   };
    //   this.findMaximumValue(root.right);
    // }
    // console.log('maxVal', maxVal);
    // return maxVal;
  }

}

// let tree = new BinaryTree();

// tree.root = new Node(1);
// tree.root.left = new Node(2);
// tree.root.right = new Node(3);
// tree.root.left.left = new Node(10);
// tree.root.left.right = new Node(6);

// tree.findMaximumValue(tree.root);


module.exports = {BinaryTree, Node}
