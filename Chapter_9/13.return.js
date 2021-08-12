/* 13. Return
============================================*/

function greet(message) {
  function greetings(name) {
    return message + ", " + name + "!";
  }
  return greetings;
}

var gm = greet("Good Morning");
var msg = gm("Abu Hosen Shawon");
console.log(msg);
