const user = {                  // Object literal
    username : "Khushi",
    loginCount : "8",
    signedIn : true,

    getUserDetails : function() {
        // console.log("Got user details from DataBase");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

const user2 = {                  // Object literal
    username : "Maria",
    loginCount : "8",
    signedIn : true,

    getUserDetails : function() {
        // console.log("Got user details from DataBase");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);


// const promiseOne = new Promise()            // new keyword = constructor function
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;   // implicitly defined
}

// const userOne = User("Khushi", 12, true);        // this method doesn't create a new instance of the oject/function, that's why, new keyword is used
// const userTwo = User("Lauren", 13, true);

const userOne = new User("Khushi", 12, true);        
const userTwo = new User("Lauren", 13, true);

console.log(userOne.constructor);
// console.log(userTwo);

