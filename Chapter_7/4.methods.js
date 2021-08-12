/* 4. Methods Obj
============================================*/

var obj = {
  x: 40,
  y: 60,
  z: 75,
};

console.log(Object.keys(obj)); // show property or keys
console.log(Object.values(obj)); // show value

console.log(Object.entries(obj));

// Assign a new Obj
var obj2 = Object.assign({}, obj);
obj2.x = 100;
console.log(obj);
console.log(obj2);
