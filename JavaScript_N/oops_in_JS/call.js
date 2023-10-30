function SetUserName(username) {
    // complex DB calls 
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUserName.call(this, username)              // To hold the reference of the called function , so that its execution context doesn't get erased after being called. 

    this.email = email;
    this.password = password;
}

const me = new createUser("khushi", "khushiatrogeek@gmail.com", "1234");

console.log(me);