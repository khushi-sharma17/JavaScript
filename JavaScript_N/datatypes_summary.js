// Primitive 
// 7 types (call by value)
/* String , Number , Boolean , Null , undefined , Symbol, BigInt */

// JavScript is a dynamically typed language.

const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 7351282173736537636n;         // after applying n, it automatically becomes bigInt
console.log(bigNumber);

// Refrence  (Non-Primitive)
// Array, Objects, Functions 

const fruits = ["banana", "apple", "mango", "litchi"];

console.log(typeof fruits);

let myObj = {
    name : "khushi",
    age : 19,
    house : "blue" 
}

console.log(typeof myObj);          // function object 

const myFunc = function() {
    console.log("khushi Sharma");
}

console.log(myFunc);
console.log(typeof myFunc);        // object function 

// the data type of null comes as Object --> function object 




//------------------ Stack(Primitive) , Heap (Non-Primitive) -------------------------

let userOne = {
    email : "khushiAsr@gmail.com",
    passwd : "Hello"
}

let userTwo = userOne;

userTwo.email = "nsdjhhh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);