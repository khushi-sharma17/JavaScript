// _email depicts a private property.

// getter and setter through properties

const User = {
    _email : 'khushiastrogeek@gmail.com',
    _password : "jdqw83y",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value
    }
}

const khushi = Object.create(User)      // factory function

console.log(khushi.email);
// email is not a method here 

// Es2022 private properties , new proposal