"use strict";

function bubbleSort(arr) {
  // loop from end
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let a = [5, 3, 4, 1, 2];

console.log("🚀 ~ file: bubble.js:19 ~ bubbleSort(a);", bubbleSort(a))

module.exports = bubbleSort;
