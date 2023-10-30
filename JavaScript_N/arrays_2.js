const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const newArray = marvel_heroes.concat(dc_heroes);
// console.log(newArray);

const all_new_heroes = [...dc_heroes,...marvel_heroes]
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Khushi"));
console.log(Array.from("Khushi"));
console.log(Array.isArray({name: "Khushi"}));   //interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));