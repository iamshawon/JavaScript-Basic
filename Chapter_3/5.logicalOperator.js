/* 5. Logical Operators
============================================*/
// && || !

var a = 10;
var b = 20;
var c = 30;
var d = 40;

// And &&
if (a > b && c > d) {
  console.log("A is greater than B & C is greater than D");
} else {
  console.log("Atleast one condition is False!");
}

// Or ||
if (a < b || c > d) {
  console.log("A is Less than B or C is greater than D");
} else {
  console.log("Atleast one condition is False!");
}

// Not !
var check = !(a < b);
console.log(check);
var check = !!(a < b);
console.log(check);
