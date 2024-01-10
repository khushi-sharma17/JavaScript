class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

// extends for inheritance
class Teacher extends User {
    constructor(username , email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourses() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const person = new Teacher("khushi", "khushiastrogeek@gmail.com", "736178");

person.addCourses();

const personTwo = new User("Lauren");
personTwo.logMe();

console.log(person === personTwo);

console.log(person instanceof Teacher);
