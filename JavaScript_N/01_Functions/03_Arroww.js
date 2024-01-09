const user = {
    userName : "Khushi",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to website.`);           // this --> current context
        console.log(this);
    }
}

user.welcomeMessage();
console.log();
user.userName = "Sammy";
user.welcomeMessage();


console.log();
console.log(this);      // empty global object 
console.log();

//  What is the global object in the Browser ? ---> window  






function chai() {
    let username = "khushi";
    console.log(this.username);         
    // console.log(this);
}
// this doesn't work in functions, but only in objects 

chai();




const chaiOne = function() {
    let username = "khushi";
    console.log(this.username);
}

chaiOne();

console.log();




// --------------- Arrow ----------------->>


const chaiTwo = () => {
    let username = "khushi";
    // console.log(this.username);
    console.log(this);
}

chaiTwo()
console.log();






//basic arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


const addTwo = (num1, num2) => num1 + num2;         // Implicit return if the statement is of only one line 
//  if you wrap them in curly braces, then you have to write the return statement.


const addThree = (num1, num2, num3) => (num1 + num2 + num3)

const addfour = (num1, num2) => ({username : "khushi"})     // objects shall be returned in paranthesis only


console.log(addTwo(3, 4));
console.log(addThree(6, 7, 9));

console.log(addfour(5, 8));



const myArray = [2, 5, 3, 7, 8];

myArray.forEach(() => {})