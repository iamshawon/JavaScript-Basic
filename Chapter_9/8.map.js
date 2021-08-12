/* 8. Map (New array return kore) 
============================================*/

var arr = [1, 2, 3];

var sqrArr = arr.map(function (value, index, arr) {
  return value * value;
});

console.log(arr);
console.log(sqrArr);

// Custom Implement
function myMap(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = callback(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

var qb = myMap(arr, function (value) {
  return value * value * value;
});

console.log(qb);
