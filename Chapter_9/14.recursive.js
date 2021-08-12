/* 14. Recursive
============================================*/

// Note: nije nijeke call korte pare, amader terminator point set korte hoy

function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log("Hi, I am calling...");

  sayHi(n - 1);
}

sayHi(10);

function sum(n) {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
}

console.log(sum(5));
