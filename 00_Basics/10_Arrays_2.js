const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes);           // doesn't return a new array 
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

console.log();



const newArray = marvel_heroes.concat(dc_heroes);   // returns a new array 
console.log(newArray);
console.log();


const all_new_heroes = [...dc_heroes,...marvel_heroes]      // spreading 
console.log(all_new_heroes);
console.log();



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 5]]]

const real_another_array = another_array.flat(Infinity);        // depth should be given in the method 
console.log(real_another_array);


console.log();
console.log(Array.isArray("Khushi"));
console.log(Array.from("Khushi"));

console.log(Array.from({name: "Khushi"}));   //interesting case for interviews by making array with keys and values 
console.log(Array.isArray({name: "Khushi"}));   
console.log();



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));      // returns a new array from set of elements 