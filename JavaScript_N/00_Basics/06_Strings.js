const name = "khushi";
const score = 50;


console.log(name + score + " Value ");  // not much readable syntax
console.log(`Hello may name is ${name} and my score is ${score}`);  // string interpolation 

const gameName = new String("khushi-ks-com");      //   --> In console 


console.log(gameName[0]);
console.log(gameName.__proto__);            // to get the object 


console.log();

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('k'));


console.log();


const newString = gameName.substring(0, 4);     // can't give negative values here, but doesn't give an error 
console.log(newString);

const anotherString = gameName.slice(-11, 8);
console.log(anotherString);

const newStrineOne = "      khushi-ks   ";
console.log(newStrineOne);
console.log(newStrineOne.trim());


console.log();

const url = "https://khushi.com%20page";
console.log(url.replace('%20', '-'));

console.log(url.includes('pri'));

console.log(gameName.split('-'));

// learn other methods from console and documentation.