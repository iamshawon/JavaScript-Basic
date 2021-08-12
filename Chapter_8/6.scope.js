/* 6. Scope  
============================================*/

var a = "abc";

function assetFater() {
  var a = 20;
  function assetSon() {
    var a = 10;
  }
  console.log(a); // Father asset a = 20
  assetSon();
}

assetFater();

function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n + " is divisible by 3 & 5");
  } else {
    console.log("Not a valid number!");
  }
}

test(11);
test(15);
