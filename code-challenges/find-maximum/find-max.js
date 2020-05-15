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

    let values = this.preOrder(root);
    let maxVal = 0;

    for (let i = 0; i < values.length; i ++) {
      if (maxVal < values[i]) maxVal = values[i];
    }

    console.log(maxVal);
    return maxVal;



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

let tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(10);
tree.root.left.right = new Node(6);

tree.findMaximumValue(tree.root);
