/* 1. For loop
============================================*/

for (i = 0; i < 10; i++) {
  console.log(i + 1 + " Abu Hosen Shawon");
}

// Topic: Increment 10
//==================================================
for (i = 0; i < 100; i += 10) {
  console.log(i + 1 + " Abu Hosen Shawon");
}

// Topic: Even number
//==================================================
for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is a Even Number");
  }
}

// Topic: Sum 1 to 100
//=================================================
var n = 100;
for (i = 1; i <= n; i++) {
  console.log(i);
}

var sum = 0;
for (var i = 1; i <= 10; i++) {
  console.log(sum + " + " + i + " = " + (sum + i));
  sum += i;
}
console.log("Total Result = " + sum);
