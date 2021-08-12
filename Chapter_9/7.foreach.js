/* 7. ForEach 
============================================*/
// Note: Original Array Modify kore

var arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index, arr) {
  console.log(value, index, arr);
});

sum = 0;
arr.forEach(function (value, index, arr) {
  sum += value;
});
console.log("Sum of Array = " + sum);

// Custom Implement

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}

sum = 0;
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
  sum += value;
});

console.log("Sum = " + sum);
forEach(arr, function (value, index, arr) {
  arr[index] = value + 5;
});
console.log(arr);
