const name = "khushi";
const score = 50;

console.log(`Hello may name is ${name} and my score is ${score}`);

const gameName = new String("khushi-ks-com");      //--> In consoe 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4);     // can't give negative values here.
console.log(newString);

const anotherString = gameName.slice(-9, 9);
console.log(anotherString);

const newStrineOne = "      khushi-ks   ";
console.log(newStrineOne);
console.log(newStrineOne.trim());

const url = "https://khushi.com/%20page";
console.log(url.replace('%20', '-'));

console.log(url.includes('priyanshi'));

console.log(gameName.split('-'));