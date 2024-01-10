// Number 

const score = 400
console.log(score);

const balance = new Number(100.0000)         // to get more methods in console by this syntax, an then return type becomes an object
console.log(balance);

console.log();
console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(3));        // gives the decimal value upto that point 


const otherNumber = 23.48627
console.log(otherNumber.toPrecision(5));

console.log();
const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-america'));
console.log(hundreds.toLocaleString('en-in'));


// in console 
// Number
// Number.MIN_SAFE_INTEGER

console.log();
console.log();


// ++++++++++++++++ Maths ++++++++++++++++++++++

// Maths library comes with JavaScript as default.

console.log(Math);          // type this in console
console.log(Math.abs(-4))
console.log(Math.round(4.444))
console.log(Math.ceil(4.67))
console.log(Math.sqrt(25))
console.log(Math.min(3, 5, 9, 2))
console.log(Math.max(3, 5, 9, 2))

console.log();
console.log(Math.random())
console.log(((Math.random()*10) + 1).toFixed())
console.log(Math.floor(Math.random()*10 + 1))


const min = 10;
const max = 20;

console.log("Here lies your answer : ");
console.log(Math.floor(Math.random() * (max - min + 1)) + min);