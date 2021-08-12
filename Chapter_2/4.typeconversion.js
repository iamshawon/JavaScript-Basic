// 4. Types of conversion

var str = '1000'
var n = 10
console.log(str * n) // String x Number = Number


// //Topic: Conversion 
//============================================

//String to Number
console.log('This is String= ' +str)
console.log(Number(str))
console.log(Number.parseInt(str))

//String to Boolean
console.log(Boolean(str))

//Number to String
console.log('This is Number= ' +n)
console.log(n.toString(n))

//Number to Boolean
console.log(Boolean(n))

//Infinity to Number ---> is not possiable
console.log(Number(Infinity))

//Infinity to Boolean
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))


// //Topic: Falsy values
//==============================================
''
0
null
undefined
NaN