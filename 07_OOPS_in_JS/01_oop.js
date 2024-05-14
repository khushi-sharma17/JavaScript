const user = {                  // Object literal same as object
    username : "Khushi",      
    loginCount : 8,
    signedIn : true,

    getUserDetails : function() {
        // console.log("Got user details from DataBase");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

const user2 = {                  // Object literal
    username : "Maria",
    loginCount : 9,
    signedIn : true,

    getUserDetails : function() {
        // console.log("Got user details from DataBase");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// undefined why ?


// console.log(this);    


// const promiseOne = new Promise()            // new keyword = constructor function
// const date = new Date()
// To create multiple instances for the same object.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;   // implicitly defined, no need to write this here
}

// const userOne = User("Khushi", 12, true);        // this method doesn't create a new instance of the oject/function, that's why, new keyword is used
// const userTwo = User("Lauren", 13, true);
// here, userTwo will overwrite the values.

// new for new instance 
// step 1 : empty object is created 
// step 2 : constructor function is called bcoz of new 
// step 3 : arguemnts are injected in this keyword

const userOne = new User("Khushi", 12, true);        
const userTwo = new User("Lauren", 13, true);

console.log(userOne.constructor);
// everything is encapsulated in userOne. = Encapsulation
// console.log(userOne);
// console.log(userTwo);

// constructor is the refernce of about yourself, that is class or function here in these examples


// instanceof