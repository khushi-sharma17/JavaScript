// Primitive 
// 7 types (call by value)
/* String , Number , Boolean , Null , undefined , Symbol, BigInt */
// they make copy of the original values 

// JavScript is a dynamically typed language.  (type defination is not necessary)

const outsideTemp = null
let userEmail

const id = Symbol('123')    // to make the value unique
const anotherId = Symbol('123')
console.log(typeof id);

console.log(id === anotherId);

const bigNumber = 7351282173736537636n;         // after applying n, it automatically becomes bigInt
console.log(bigNumber);
console.log(typeof bigNumber);


console.log();




// Refrence  (Non-Primitive)    = call by reference 
// Array, Objects, Functions 

// array
const fruits = ["banana", "apple", "mango", "litchi"];

console.log(typeof fruits);     // object 

// object 
let myObj = {
    name : "khushi",
    age : 19,
    house : "blue" 
}

console.log(typeof myObj);       // function object 

console.log();


// function
const myFunc = function() {
    console.log("khushi Sharma");
}

console.log(myFunc);
console.log(typeof myFunc);        // object function 

console.log();

// the data type of null comes as Object --> function object 






//-------------------- Stack(Primitive) , Heap (Non-Primitive) -------------------------

// copy in stack and refernce in heap 
// change in original value in non - primitive and in copy in primitive types

let userOne = {
    email : "khushiAsr@gmail.com",
    passwd : "Hello"
}

let userTwo = userOne;

userTwo.email = "nsdjhhh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);