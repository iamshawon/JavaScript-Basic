/* 1. String
============================================*/

var str = "Something"; //String Literal
var str2 = String("Something2");
console.log(str, str2);

// Topic: Number to String convert - 3 ways
//================================================
var n = 10;

var str = n + "";
console.log(n);
console.log(str);

var str2 = n.toString();
console.log(str2);

var str3 = String(n);
console.log(str3);

// Topic: Escape Notation - 2 ways
//===========================================
var str = "This is a 'String'";
console.log(str);

var str2 = "This is a 'String'"; // escape character \'
console.log(str2);

var str3 = "This is a \nString"; // new line
console.log(str3);

var str4 = "This is a \tString"; // tab
console.log(str4);

var str5 = "This is a \\String"; // print backslash
console.log(str5);

var str6 = "This is a \rString"; // carriage return
console.log(str6);

var str7 = "This is a \bString"; // backspace
console.log(str7);

var str8 = "This is a \vString"; // vartical tab
console.log(str8);

var str9 = "This is a \fString"; // form feed
console.log(str9);

// Topic: String Comparison (Lexicographic system)
//==================================================
var a = "abc";
var b = "bcd";

console.log(a === b);
console.log(a > b);
console.log(a < b); //true

//Note: Lexicographical order:
// z, y, x, ...a, Z, Y, X, ..., B, A (bigger to smaller)

console.log("z" > "Z");

// Topic: Compare String and Number
//=========================================================
console.log("001" === 1); // true

// Topic: String Method
//=========================================================
var a = "I am";
var b = "Shawon";

var c = a.concat(" ", b); // concat
console.log(c);

var d = c.substr(5, 6); // substr
console.log(d);

console.log(c.charAt(0)); // charAt

console.log(c.startsWith("I am")); // startsWith

console.log(c.endsWith("Shawon")); // endsWith

console.log("abc".toUpperCase()); // toUpperCase

console.log(b.toLowerCase()); // toLowerCase

console.log("     newfile    ".trim()); //trim

console.log(c.split(" ")); //split

// Topic: String Length
//===============================================
var str = "Abu Hosen Shawon";
console.log(str.length);

var str = "Abu Hosen Shawon";
var length = 0;

while (true) {
  if (str.charAt(length) === "") {
    break;
  } else {
    length++;
  }
}
console.log(length);
