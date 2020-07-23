'use strict';

const quickSort = require('./quickSort.js');

describe('Happy Path', () => {
  it('unsorted array', () => {
    let res = quickSort([8,3,2,5,12,9]);
    expect(res).toStrictEqual([2,3,5,8,9,12])
  });

  it('sorts with a negative number', () => {
    let res = quickSort([8,3,2,-5,12,9]);
    expect(res).toStrictEqual([-5,2,3,8,9,12])
  })
})