/* 4. Function Expression  
============================================*/

var addition = function (a, b) {
  // Anonymous function
  return a + b;
};

addition(10, 45);

setTimeout(function () {
  console.log("I will call after 3s");
}, 3000);

var another = addition;
console.log(another(7, 8));
