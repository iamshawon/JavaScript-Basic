/* 5. Inner or nested function  
============================================*/

function something(greet, name) {
  function sayHi() {
    console.log(greet + ", " + name);
  }
  sayHi();
}

something("Hello!", "Abu Hosen Shawon");

// For message
function getMessage(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    }
  }
  var message = greet + " " + getFirstName();
  console.log(message);
}

getMessage("Hello!", "Abu Hosen Shawon");
