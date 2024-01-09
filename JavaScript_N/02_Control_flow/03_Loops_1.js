const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : "Swift by apple"
}

// for-in in objects 
for (const key in myObject) {
    console.log(`${key} shortcut is for : ${myObject[key]}`);
}
console.log();


const programming = ['js', 'rb', 'java', 'py', 'cpp', 'c']
// for-in array in index 
for (const key in programming) {
    console.log(key);
}
console.log();


for (const key in programming) {
    console.log(programming[key]);
}



// Map is not iterable for-in in loop 
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India")

// console.log(map);

for (const [key, value] in map) {
    console.log(key, ":",  value);
}
