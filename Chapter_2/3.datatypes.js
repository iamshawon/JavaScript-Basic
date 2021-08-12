// 3. Datatypes

// Datatypes are 2 type --> Primitive & Object
// Primitive: Number, String, Boolean, undefined, null
// Object: Array, object, function


// Numbers
var n  = 1450
var f = 3.14
var num =  Number('45.45')
console.log(num)
console.log(Number.parseFloat(num))
console.log(Number.parseInt(num))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)

console.log(1/0)  // Infinity
console.log('abc' * 10)  // NaN


// String
// It's String Literal
var str = 'String'
var str2 = "String"
var str3 = `String`    // `` back track

// This is String Constructor
var str4 = String('String') 
var str5 = String(144)
var str6 = String(3.1416)
console.log(str4, str5, str6)


// Boolean
var b1 = true
var b2 = false

var b3 = Boolean(true)
var b4 = Boolean(false)
console.log(b1, b2, b3, b4)


// Null vs Undefined
var abc
var xyz = null
console.log(abc, xyz)


//Topic: HEX & OCT
//======================================
//Note: for HEX at first use 0x and for OCT use 0
var hex = 0xff
console.log(hex)

var oct = 0756
console.log(oct)