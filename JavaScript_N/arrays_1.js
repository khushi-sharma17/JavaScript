const myArr = [1, 2, 4, 6, 8, 10]       // can store different data types and are resizeable 
const myFruits = ["banana", "apple", "mango"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]);

// Array methods 
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

myArr.unshift(67);      // implements at the start of the array 
myArr.shift();
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));
console.log();

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);     // --> datatype = string 

// slice, splice 
// splice changes the original array 

console.log("A", myArr);

const myN1 = myArr.slice(1, 3);
console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1, 3);
console.log(myN2);
console.log("C", myArr);

