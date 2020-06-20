'use strict'

const mergeSort = require('./mergeSort.js');

describe('mergeSort works! ', () => {
  it('can sort an array', () => {
    let arr = [8,2,4,1,6,10];
    expect(mergeSort(arr)).toEqual([1,2,4,6,8,10]);
  });

  it('can sort an array with negative numbers', () => {
    let res = mergeSort([8,-2,4,1,6,10]);
    expect(res).toEqual([-2,1,4,6,8,10]);
  });

  it('can sort an array with duplicate numbers', () => {
    let res = mergeSort([8,2,2,1,6,10]);
    expect(res).toEqual([1,2,2,6,8,10]);
  });

})