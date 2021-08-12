/* 11. Lexical = computer token
============================================*/

// kon funtion kon funtion er property pabe...

var x = 55;

function test() {
  var x = 45;

  function nested() {
    var x = 35;
    console.log(x);
  }

  nested();
}

test();
