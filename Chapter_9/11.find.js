/* 11. Find 
============================================*/

var arr = [7, 4, 8, 6, 9, 2, 9, 1, 70, 3];
var result = arr.find(function (value, index) {
  return value === 9;
});

console.log(result);

// Index
var resultIndex = arr.findIndex(function (value, index) {
  return value === 9;
});
console.log(resultIndex);
