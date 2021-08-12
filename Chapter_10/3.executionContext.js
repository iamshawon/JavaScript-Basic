/* 3. Execution Context
============================================*/

function a() {
  b();
  console.log("I am Function A");
}

function b() {
  d();
  console.log("I am Function B");
}

function c() {
  console.log("I am Function C");
}

function d() {
  c();
  console.log("I am Function D");
}

var x = 100;
a();
console.log("I am Global Function");

// Execution Stack:

// Execution of C Function context
// Execution of D Function context
// Execution of B Function context
// Execution of A Function context
// Execution of global context
