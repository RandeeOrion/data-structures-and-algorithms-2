'use strict';

class Animal {
  constructor(kind) {
    this.species = kind.toLowerCase();
    this.next = null;
  }
}

module.exports = Animal;