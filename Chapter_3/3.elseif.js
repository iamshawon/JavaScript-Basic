/* 3. If Else Condition
============================================*/

var a = 20;
var b = 20;

// Greater Less & Same
if (a > b) {
  console.log(a + " is greater than" + b);
} else if (a < b) {
  console.log(b + " is greater than " + a);
} else {
  console.log("They are Same");
}

// Even Odd & Zero
var n = 0;
if (n === 0) {
  console.log(n + " is Zero!");
} else if (n % 2 === 0) {
  console.log(n + " is a Even number");
} else {
  console.log(n + " is a Odd number");
}
