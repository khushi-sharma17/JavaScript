let myName = "Khushi     ";

console.log(myName.length);
// console.log(myName.truelength());    // how ?

console.log(myName.trim().length);

let myHeroes = ["thor", "SpiderMan"];

let heroPower = {
    thor : "hammer",
    SpiderMan : "sling",

    getSpiderPower : function() {
        console.log(`SpiderMan power is ${this.SpiderMan}`);
    }
}

Object.prototype.khushi = function() {
    console.log(`Khushi is present in all objects`);
}

Array.prototype.heyKhushi = function() {
    console.log(`Khushi says Hello`);
}

heroPower.khushi();     // Object
myHeroes.khushi();      // Array

myHeroes.heyKhushi();
//heroPower.heyKhushi();      // Not granted access of the hey function 









// Inheritance 

const User = {
    name : "Khushi",
    email : "khushiastrogeek@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,

    __proto__ : TeachingSupport
}

Teacher.__proto__ = User            // Prototypal Inheritance // an old approach

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);
// TeachingSupport accesses all the properties of teacher



console.log();

let anotherUsername = "lauren           ";

String.prototype.trueLength = function() {
    console.log(`The values under the true length portion : `);
    console.log(`${this}`);
    console.log(`The true length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
console.log();
"Khushi    ".trueLength();

"dehs8776wys    najK88   ".trueLength();
