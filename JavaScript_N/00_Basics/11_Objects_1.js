// singleton - only through object, constructor.
// Object.create

// literal and contructor = Objects can be declared using these types.

const mySym = Symbol("Key1");       // symbol

// keys and values 
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

// access methods 
console.log(JS_user.email);
console.log(JS_user["email"]);      // email is a string in the object 
console.log(JS_user["full name"]);      // cannot access with dot
console.log(typeof JS_user[mySym]);      // used as a string over here.
console.log(JS_user[mySym]);       

console.log(typeof mySym);

console.log();

JS_user.email = "khushiastrogeek@gmail.com";

// Object.freeze(JS_user);         // values cannot be changed now after freezing.

JS_user.email = "khushi@microsoft.com";
console.log(JS_user.email);

console.log(JS_user);

 
console.log();

JS_user.greeting = function() {
    console.log("Hello JS User.");
}

JS_user.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);     // to refer to the same object
}

console.log(JS_user.greeting);  // [function(anonymous)]

console.log(JS_user.greeting());
console.log(JS_user.greetingTwo());