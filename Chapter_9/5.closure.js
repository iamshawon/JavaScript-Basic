/* 5. Closure 
============================================*/

// Jodi kono scope er vetore baire theke kono data ase tai closure

var b = 10;

function a() {
  var x = 5;

  return function () {
    console.log(x); //as a closure
  };
}

var abc = a();
console.dir(abc);
