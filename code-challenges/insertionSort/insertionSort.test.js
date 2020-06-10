'use strict';

const insertionSort = require('./insertionSort.js');

describe('Rainbows and Unicorns', () => {

  it('heap o numbers', () => {
    let heap = insertionSort([4,1,5,2,6,3]);
    expect(heap).toStrictEqual([1,2,3,4,5,6]);
  });

  it('heap o numbers with repeat digits', () => {
    let heap = [4,1,2,2,3,3];
    expect(insertionSort(heap)).toStrictEqual([1,2,2,3,3,4]);
  })

  it('heap o numbers with a negative', () => {
    let heap = [4,1,-5,2,6,3];
    expect(insertionSort(heap)).toStrictEqual([-5,1,2,3,4,6]);
  });

});