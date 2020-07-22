'use strict';


class Node  {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST  {
  constructor(){
    this.root = null;
  }
  
  add (val, ){
    if (!this.root) 
      new Node(val);
    else (this.root.left) 
      return this.searchTree(val, this.root);
  }

  searchTree(newVal, node){
    if(newVal < Node.val){
      if(node.left === null){
        node.left = new Node(newVal);
        return;
      } else {
        return this.searchTree(newVal, node.left);
      }
    } else if (newVal > node.val) {
      if (node.right === null) {
        node.right = new Node(newVal);
        return;
      } else {
        return this.searchTree(newVal, node.right)
      }
    } else {
      return console.log('shootskies, trying to add a number more than once. but we have you covered!');
    }
  }

  preOrder(root = this.root){
    let valArr = [];
    valArr.push(root.val);

    if (root.left)
      valArr = [...valArr, ...this.preOrder(root.left)];

    if (root.right)
      valArr = [...valArr, ...this.preOrder(root.right)];
    
    return valArr;
  }

  inOrder(root = this.root) {
    let valArr = [];

    if (root.left)
     valArr = [...valArr, this.inOrder(root.left)];

    valArr.push(root.val);

    if (root.right)
      valArr = [...valArr, this.inOrder(root.right)];

    return valArr;
  }

  postOrder(root = this.root) {
    let valArr = [];

    if(root.left)
      valArr = [...valArr, this.postOrder(root.left)];
    
    if(root.right)
      valArr = [...valArr, this.postOrder(root.right)]
    
    valArr.push(this.root);

    return valArr;
  }

}