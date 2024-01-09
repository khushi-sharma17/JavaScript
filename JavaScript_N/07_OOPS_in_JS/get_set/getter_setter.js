class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
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

