/* 6. Callback 
============================================*/

function sample(a, b, callback) {
  var c = a + b;
  var d = a - b;

  var result = callback(c, d);
  return result;
}

var result2 = sample(2, 3, function (c, d) {
  return c * d;
});
console.log(result2);
