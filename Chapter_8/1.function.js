/* 1. Function in JS
============================================*/

/* Q. What is function?
Ans: Function is like a Machine with:
- input
- output
- processing 
*/

function functionName() {
  console.log("This is a Function");
}
functionName(); // Invoke or call

function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

for (var i = 0; i < 10; i++) {
  add();
}
