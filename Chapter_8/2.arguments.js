/* 2. Arguments 
============================================*/

function add(a, b) {
  result = a + b;
  console.log(result);
}
add(500, 700);

// Array function
var arr1 = [1, 3, 5];
var arr2 = [3, 5, 7];
var arr3 = [7, 9, 11];

function sumOfArray(arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);

// Topic: Arguments
//===============================================

function test(a, b, c) {
  console.log(arguments);
}
test(10, 20, 30);

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
addAll(5, 10, 15, 20);
addAll(5, 10, 15, 20, 25, 32, 55);
