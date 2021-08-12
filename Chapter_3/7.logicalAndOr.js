/* 7. Logical And & Or
============================================*/

// Topic: Logical Or
//===========================================
var fullname = "";

var name = fullname || "Abu Hosen Shawon";
console.log(name);

// With declare variable
var fullname = "Mr X";

var name = fullname || "Abu Hosen Shawon";
console.log(name);

// Topic: Logical And
//============================================
var isOk = true;
isOk && console.log("Everything is Ok");
