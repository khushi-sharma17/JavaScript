// iterators 

// for loop 

const num = 10;

for(let i = 1 ; i<=num ; i++) {
    if(i==5) {
        console.log("5 is best number ");
    }
    console.log(i);
}


// for(let i=1; i<=10 ; i++) {
//     console.log(`Outer loop values ${i}`);
//     for(let j=1 ; j<=10 ; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

let myArray = ["flash", "batman", "superman"]

console.log(myArray.length);
for(let i = 0; i < myArray.length ; i++) {
    const element = myArray[i];
    console.log(element);
}

// break and continue 

// while 

let i = 0;
while(i < 10) {
    console.log(`Value of index is : ${i}`);
    i += 2;
}

// Do-while
let score = 11;
do {
    console.log(`score is : ${score}`);
    score++;
} while(score <= 10);


// for-of loop 

const arr = [1, 2, 3, 4, 5, 6];

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World";
for(const greet of greetings) {
    console.log(greet);
}


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

const myObject = {
    game1 : "NFS",
    game2 : "SpiderMan"
}

// console.log(myObject);
// // object is not working forof loop
// for (const [key, value] of myObject) { 
//     console.log(key , ":-", value);
// }
