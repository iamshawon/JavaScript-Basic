/* 3. First class function 
============================================*/

function add(a, b) {
  return a + b;
}

// 1. A function can be stored in a Variable
var sum = add;
console.log(sum(7, 8));

// 2. A function can be stored in an Array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](5, 3));

// 3. A function can be stored in an Object
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(7, 9));

// 4. We can create Function as we Need
setTimeout(function () {
  console.log("I have created...");
}, 2000);

// 5. We can pass Function as an Arguments

// 6. We can return Function from another Function
