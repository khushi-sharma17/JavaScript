function sayMyName(){
    console.log("Khushi Sharma");
}

sayMyName();

// function addTwoNumbers(number1, number2){       // parameters
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){       // parameters
    let result = number1 + number2;
    return result;
}    


const resultOne = addTwoNumbers(1, null);     // arguments
console.log("Result is : ", resultOne);



function loginUserMessage(username = "Sam"){        // default 
    if(username === undefined) {        // if(!username){}
        console.log("Please enter a username first.");
        return;
    }
    return `${username} Just logged in `
}

console.log(loginUserMessage("khushi"));

console.log(loginUserMessage());



// ------------- + -------------- + --------

function calculateCartPrice(val1, val2, ...num1) {          // ...  = rest or spread operator 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    userName : "khushi",
    price : 200
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    userName : "Priyanshi",
    price : 7937
})

const myNewArray = [200, 400, 600, 100];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([200, 400, 500, 1000])); 

