// In JS , everything is an object
// Array ---> Object ---> null
// String ---> Object ---> null
// function is also an object

function multiplyByFive(num) {
    this.num = num;     // its context is stored in the line 14 prototype
    return num * 5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);      // 2
console.log(multiplyByFive.prototype);



function createUser(username, score){
    this.username = username;
    this.score = score;
}

// can create your own functions
createUser.prototype.increment = function() {
    this.score++;               // this = jisne bhi bulaya hai uska score badha do 
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

const me = new createUser("me", 25);                // new keyword is necessary here, otherwise values will not be printed 
const friend = new createUser("friend", 30);

me.increment()
me.printMe()
friend.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/