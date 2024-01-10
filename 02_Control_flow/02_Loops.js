// iterators 

// for loop 

const num = 10;

for(let i = 1 ; i<=num ; i++) {
    if(i==5) {
        console.log("5 is best number ");
    }
    console.log(i);
}

console.log();



// for(let i=1; i<=10 ; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for(let j=1 ; j<=10 ; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


console.log();
console.log();



let myArray = ["flash", "batman", "superman"]

console.log(myArray.length);
console.log();

for(let i = 0; i < myArray.length ; i++) {
    const element = myArray[i];
    console.log(element);
}
console.log();
console.log();



// break and continue 

// while 

let i = 0;
while(i < 10) {
    console.log(`Value of index is : ${i}`);
    i += 2;
}
console.log();

// Do-while
let score = 11;
do {
    console.log(`score is : ${score}`);
    score++;
} while(score <= 10);

console.log();



// for-of loop 

const arr = [1, 2, 3, 4, 5, 6];

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World";
for(const greet of greetings) {
    if(greet === ' ') {
        continue;
    }
    console.log(`Each char is ${greet}`);
}

// const greetings = "Hello World";
// for (const greet of greetings) {
//     process.stdout.write(greet);
// }

console.log();
console.log();





// Maps
// they only take unique values 
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key , ":-", value);
}
console.log();



// objects are not iterable for of loop

const myObject = {
    game1 : "NFS",
    game2 : "SpiderMan"
}

// console.log(myObject);
// for (const [key, value] of myObject) { 
//     console.log(key , ":-", value);
// }