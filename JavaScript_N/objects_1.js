// singleton - only through object constructor.
// Object.create
// literal and contructor = Objects can be declared using these types.

const mySym = Symbol("Key1");

// object literals 
const JS_user = {
    name : "Khushi",
    "full name": "Khushi Sharma",
    [mySym] : "myKey1",             // to refer to a symbol
    age : 19,
    location : "Jaipur", 
    email : "khushi@gmail.com",
    isLoggedIn : false,
    lastLogInDays: ["Monday", "Saturday"]
}

console.log(JS_user.email);
console.log(JS_user["email"]);
console.log(JS_user["full name"]);
console.log(typeof JS_user[mySym]);      // used as a string over here.
console.log(JS_user[mySym]);       

console.log(typeof mySym);

JS_user.email = "khushiastrogeek@gmail.com";

// Object.freeze(JS_user);         // values cannot be changed now after freezing.
JS_user.email = "khushi@microsoft.com";
console.log(JS_user.email);

console.log(JS_user);

JS_user.greeting = function() {
    console.log("Hello JS User.");
}

JS_user.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JS_user.greeting);

console.log(JS_user.greeting());
console.log(JS_user.greetingTwo());
