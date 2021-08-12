/* 8. Hoisting
============================================*/

var a = 100;

newPrint(a);

print(10);

var newPrint = print;
newPrint(45);

function print(a) {
  console.log(a);
}
print(a);

// Creational Phase
/*
    a = undefined
    newPrint = undefined
    print + ref
*/

// Executional Phase
/*
    a = 100
    undefined [undefine call hote pare na tai error]
    10
    newPrint = print+ref
    45
    100
*/
