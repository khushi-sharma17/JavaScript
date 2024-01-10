// getter and setter through properties

function User(email, password) {
    this._email = email;
    this._password = password

    // parent container, property, and function
    Object.defineProperty(this, "email", {
        get : function() {
            return this._email.toUpperCase()
        },

        set : function(value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, "password", {
        get : function() {
            return this._password.toUpperCase()
        },

        set : function(value) {
            this._password = value;
        }
    })
}

const khushi = new User("khushi@gmail.com", "heg73");

console.log(khushi.email);