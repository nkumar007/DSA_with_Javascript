function quick_sort(arr, start, end) {
  if (start >= end) return;
  let pivot = arr[end];
  let left = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }
  // Placing pivot
  arr[end] = arr[left];
  arr[left] = pivot;

  // Partitioning the array
  quick_sort(arr, start, left - 1);
  quick_sort(arr, left + 1, end);
  return arr;
}

const arr = [3, 1, 4, 2, 1, 5];
console.log(quick_sort(arr, 0, arr.length - 1));

// Qick sort in the worst case takes O(Nˆ2) time and O(NlogN) in average
