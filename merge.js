function merge(arr1, arr2) {
  const mergeArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        mergeArr.push(arr1[i]);
      i++;
    } else {
        mergeArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergeArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergeArr.push(arr2[j]);
    j++;
  }

  return mergeArr;
}

// ##################################

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

module.exports = { merge, mergeSort};