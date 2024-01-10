class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    // Static doesn't give access to the functions
    static createId() {
        return `123`
    }
}

const khushi = new User("Khushi")
// console.log(khushi.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const supriya = new Teacher("supriya", "supriya@gmail.com");
supriya.logMe();
// console.log(supriya.createId());