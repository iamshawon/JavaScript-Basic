/* 10. Nested Scope
============================================*/

var x = 55;

function test() {
  var x = 45;

  function nested() {
    var y = 65;
    console.log(x);
  }
  // console.log(y)   [Scope er baire tai error]
  nested();
}

test();
