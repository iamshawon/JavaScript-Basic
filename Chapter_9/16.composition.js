/* 16. Function Composition
============================================*/

function output(number) {
  console.log(number); //at last eita te result passi...
}

function multiply(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

output(multiply(add(3, 5)));
