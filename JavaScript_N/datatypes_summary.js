// Primitive = 7 types (call by value)
/* String , Number , Boolean , Null , undefined , Symbol, BigInt */

// JavScript is a dynamically typed language.

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 7351282173736537636n;
console.log(bigNumber);

console.log(id === anotherId);

// Refrence  (Non-Primitive)
// Array, Objects, Functions 

const fruits = ["banana", "apple", "mango", "litchi"];
let myObj = {
    name : "khushi",
    age : 19,
    house : "yellow" 
}

const myFunc = function() {
    console.log("khushi Sharma");
}

console.log(myFunc);

// the data type of null comes as Object --> function object 


// Stack(Primitive) , Heap (Non-Primitive)

let userOne = {
    email : "khushiAsr@gmail.com",
    passwd : "Hello"
}

let userTwo = userOne;

userTwo.email = "nsdjhhh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);

