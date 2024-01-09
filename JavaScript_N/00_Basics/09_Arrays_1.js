// Arrays

const myArr = [1, 2, 4, 6, 8, 10, true , "khushi"]       // can store different data types and are resizeable 
console.log(myArr[0]);          

const myFruits = ["banana", "apple", "mango"];

const myArr2 = new Array(1, 2, 3, 4);   // here , simple brackets are there 

// shallow copy = A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
// like in stack 

// deep copy = A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
// like in heap 

// Array methods 
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log();

myArr.unshift(67);      // implements at the start of the array 
console.log(myArr);

myArr.shift();       // shifts the array by one position 
console.log(myArr);
console.log();

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));
console.log();



const newArr = myArr.join();     // returns the value in a string 

console.log(myArr);
console.log(newArr);     // --> datatype = string 
console.log(typeof newArr);
console.log();
// slice, splice 
// splice changes the original array 


console.log("A", myArr);
const myN1 = myArr.slice(1, 3);
console.log(myN1);

console.log("B", myArr);
const myN2 = myArr.splice(1, 3);
console.log(myN2);
// splice also changes the original array as it removes the splice portion from the original array permanently , whereas slice doesn't change the original array
// in slice the last position is not included, but in splice the last position is given.

console.log("C", myArr);