// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const me = new User("Khushi", "khushiastrogeek@gmail.com", "1234")

console.log(me.encryptPassword());
console.log(me.changeUsername());


// Behind the Scenes 

// function User(username , email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`;
// }

// User.prototype.changeUsername = function() {
//     return `${this.username.toUpperCase()}`;
// }

// const me = new User("Lauren", "Lauren@gmail.com", "123455")

// console.log(me.encryptPassword());
// console.log(me.changeUsername());