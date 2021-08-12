/* 2. Compare Object
============================================*/

var obj1 = {
  a: 10,
  b: 20,
};

var obj2 = {
  a: 10,
  b: 20,
};

console.log(obj1 === obj2); // false bcz check merory location

console.log(obj1);
console.log(JSON.stringify(obj1));

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //true
