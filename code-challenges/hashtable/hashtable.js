'use strict';

class HashTable {
  constructor() {
    this.table = new Array(137);
    this.values = [];
  }

  hash(string) {
    const H = 37;
    let total = 0;

    for (var i = 0; i< string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
  }
}