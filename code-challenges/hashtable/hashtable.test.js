'use strict';

const HashTable = require('./hashtable.js');

describe('HashTable Test', () => {
  const map = new HashTable();

  it('Adds to the HashTable', () => {
    map.add('eggs', 'side of potatoes'); 

    expect(map.contains('eggs')).toBe(true);
  })

  it('Checks for a specific key that does not exist', () => {
    map.add('lentils', 'are so delicious');

    expect(map.get('bears')).toBe(undefined)
  })  
})