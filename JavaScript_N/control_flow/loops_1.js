const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : "Swift by apple"
}

// forin in objects 
for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`);
}

const programming = ['js', 'rb', 'java', 'py', 'cpp', 'c']
// forin array in index 
for (const key in programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India")

// console.log(map);

for (const [key, value] in map) {
    console.log(key, ":",  value);
}
// Map is not iterable 
