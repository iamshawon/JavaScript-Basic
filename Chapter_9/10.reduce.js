/* 10. Reduce 
============================================*/

var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function (prev, curr, index, arr) {
  return prev + curr;
});
console.log(sum);

var sum = arr.reduce(function (prev, curr, index, arr) {
  return prev + curr;
}, 100);
console.log(sum);

var max = arr.reduce(function (prev, curr) {
  return Math.max(prev, curr);
}, 0);
console.log(max);
