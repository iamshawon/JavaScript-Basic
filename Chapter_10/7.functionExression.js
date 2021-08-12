/* 7. Function Expression
============================================*/

function abc() {
  console.log("I am a Function");
}

newAbc();

var newAbc = function () {
  console.log("I am New Abc Function");
};

// Creational Phase
/*
    abc + ref
    newAbc = undefined [undefined call kora jay na]
*/
