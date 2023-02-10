function merge(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  // if i pointer hasn't fully checked arr1
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  // if j pointer hasn't fully checked arr2
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  // this one liner works too but higher space complexity?
  // i < arr1.length
  //   ? res.push(...arr1.slice(i))
  //   : res.push(...arr2.slice(j));

  return res;
}

function mergeSort(arr) {
  // base case && edge case
  if (arr.length <= 1) {
    return arr;
  }

  // recursive case
  const midIdx = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, midIdx)), mergeSort(arr.slice(midIdx)));
}

module.exports = { merge, mergeSort };
