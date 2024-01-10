class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();       // here _ is necessary , so as not to get stack overflow 
    }

    set email(value) {              // in database, the value of the password is stored in the lower case only.
        this._email = value;
    }

    get password() {
        // return this._password.toUpperCase();
        return `${this._password}khushi`
    }

    set password(value) {
        this._password = value;
    }
}

const Khushi = new User("khushiastrogeek@gmail.com", "7837g");
console.log(Khushi.password);
console.log(Khushi.email);

// getter and setter of a property both are needed, only one is not allowed.