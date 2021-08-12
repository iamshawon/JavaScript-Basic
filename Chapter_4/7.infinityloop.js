/* 7. Infinity For loop(Remove break)
============================================*/

for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner!");
  } else {
    console.log("You get: " + rand);
  }
}
