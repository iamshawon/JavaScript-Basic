/* 14. IEFE = Immediately invoked function expression
=======================================================*/

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}

// IEFE [Own execution system]

for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
