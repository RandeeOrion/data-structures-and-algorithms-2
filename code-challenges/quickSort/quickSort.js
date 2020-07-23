'use strict';

const quickSort = (arr, start = 0, end = arr.length -1) => {

  if(start < end) {
    console.log('inside if of quicksort')
    let position = partition(arr, start, end)

    quickSort(arr, start, position -1);
    quickSort(arr, position +1, end)

    console.log(arr);
    return arr;
  }
}

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let low = start - 1;
  
  for (let i = start; i < end; i ++){
    if (arr[i] <= pivot) {
       low++;
       swap(arr, i, low);
    }
  }

  swap(arr, end, low + 1)
  return low + 1;
}

const swap = (arr, i, low) => {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}


module.exports = quickSort;