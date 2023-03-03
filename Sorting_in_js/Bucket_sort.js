function bucket_sort(arr) {
  let counts = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] += 1;
  }

  let i = 0;

  for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j <= counts[n]; j++) {
      arr[i] = n;
      i++;
    }
  }
  return arr;
}

console.log(bucket_sort([2, 1, 2, 0, 0, 2]));

// The use cases of the Bucket sort is limited when compared to other sorting methods.
// In the worst case it takes O(N). This is might seem better but Bucket sort is efficient in a limited range
