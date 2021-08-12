/* 1. Object
============================================*/

// Topic: Object Declaration
//===================================================
// Literal & Constructor

var obj = {};
console.log(typeof obj);

// Topic: Obj Literal
//==================================
var point = {
  x: 10,
  y: 20,
};

// Update a value
point.y = 25;
console.log(point);

// New value Insert
point.z = 30;
console.log(point);

// Remove
point.a = 22;
console.log(point);

point.a = undefined;
console.log(point);

delete point.a;
console.log(point);

// Topic: Obj Constructor
//====================================

var obj = Object();
obj.a = 10;
console.log(obj);

var obj2 = new Object();
obj2.b = 20;
console.log(obj2);

// Topic: Access property & value
//============================================
// dot notation, array notation

var point = {
  x: 10,
  y: 20,
  z: 15,
};
console.log(point.x); // dot notation
console.log(point.y);
console.log(point.x + point.z);

console.log(point["x"] + point["y"]); // array notation
var show = "z";
console.log(point[show]);
