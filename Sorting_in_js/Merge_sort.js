function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid + 1);
  let rightArr = arr.slice(mid + 1, right + 1);

  i = left;
  j = 0;
  k = 0;
  while (j < leftArr.length && k < rightArr.length) {
    if (leftArr[j] <= rightArr[k]) {
      arr[i] = leftArr[j];
      j++;
    } else {
      arr[i] = rightArr[k];
      k++;
    }
    i++;
  }
  while (j < leftArr.length) {
    arr[i] = leftArr[j];
    j++;
    i++;
  }
  while (k < rightArr.length) {
    arr[i] = rightArr[k];
    k++;
    i++;
  }
}
function ms(arr, low, high) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  ms(arr, low, mid);
  ms(arr, mid + 1, high);
  merge(arr, low, mid, high);
  return arr;
}

const arr = [3, 4, 1, 5, 9, 6];

console.log(ms(arr, 0, arr.length - 1));

// In the worst case the Merge Sort actually performs better when compared to Insertion Sort and Quick Sort
// It takes O(NlogN) in worst case
