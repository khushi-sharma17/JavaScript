// let score = "33"
let score = undefined

// const {score} = req.body     // don't know whether the score is string or in int

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)   // conversion here from string to number
console.log(typeof valueInNumber);

console.log(valueInNumber);


console.log();  // space


let someNumber = 33
let StringNumber = String(someNumber)
console.log(typeof StringNumber);


console.log();


// conversion
// "33" --> 33
// "33abc" --> NaN
// true --> 1 ; false --> 0
// "" --> false for boolean 
// "khushi" --> true for boolean 

// ---------------------   Operations  ---------------------

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "Hello"
let str2 = " khushi"
let str3 = str1 + str2 
console.log(str3)


console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log(+true);
console.log(+"");


let num1, num2 ;
num1 = num2 = 3 + 3        // bad practice 


let gameCounter = 100
gameCounter++
console.log(gameCounter);