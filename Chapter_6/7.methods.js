/* 7. Methods of Array
============================================*/

var arr = [4, 5, 6, 7, 8];
var arr2 = [5, 10, 45, 23];

// join
console.log(arr.join(" "));
console.log(arr.join(","));
console.log(arr.join(" | "));

// fill
arr.fill(true);
console.log(arr);

// concat
var arr3 = arr.concat(arr2);
console.log(arr3);

// isArray
console.log(Array.isArray(arr3));

// from
console.log(Array.from(arr3));
