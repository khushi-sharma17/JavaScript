"use strict"; //treat all js code as newer version

// alert(3 + 3)    //we are using nodejs, not browser . we have different syntax to use this in nodejs
// code readability should be high 

let nameofme = "khushi";
let age = 19;
let state = null;
let isLoggedIn = false

// DataTypes ==>
// number --> range = 2 to the power 53 around
// bigint
// string => ""
// boolean = true/false
// null --> standalone value, represenation of empty value 
// undefined --> value has not been designated
// symbol --> uniqueness
// object 


console.log(typeof (age));
console.log(typeof nameofme);
console.log(typeof null);           // object why ? = null is an object 
// In JavaScript, null is a primitive value, not an object. However, due to a historical bug in the language, the typeof operator returns "object" when used on null:

console.log(typeof undefined);

// original Documentation --> tc39.es (ECMA standard)
// another documentation = mdn 


// There are around 64 keywords in javascript