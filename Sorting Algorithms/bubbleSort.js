var arr = [23,5,67,3,45,4,9,65];

bubbleSort(arr);
console.log(arr.length);

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
}

function swap(x, y) {
  var swap = 0;
  swap = arr[x];
  arr[x] = arr[y];
  arr[y] = swap
  console.log("array", arr);
}
