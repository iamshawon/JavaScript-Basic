/* 2. While loop
============================================*/

var i = 0;
while (i < 10) {
  console.log("Abu Hosen Shawon");
  i++;
}

// Boolean condition
var isRunning = true;
while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner!");
    isRunning = false;
  } else {
    console.log("You get: " + rand);
  }
}
