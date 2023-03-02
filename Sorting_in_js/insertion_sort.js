// Insertion Sort

function insertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([2, 6, 8, 1, 5], 5));

// Time Complexity
// In the best case if the given array is sorted then it would take O(N).
// In the worst case if we are given an array i.e [9,8,7,6,5,4,3,2,1] then it would take O(Nˆ2)
