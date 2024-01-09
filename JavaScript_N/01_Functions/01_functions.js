function sayMyName() {
    console.log("Khushi Sharma");
}

sayMyName       // reference 
sayMyName();    // execution
console.log();




// function addTwoNumbers(number1, number2){       // parameters
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){       // parameters
    let result = number1 + number2;
    return result;
}    

const resultOne = addTwoNumbers(1, null);     // arguments = when the function is called and then what numbers are specified in that 
console.log("Result is : ", resultOne);     // here the number will only come, if you return something from the function.
console.log();




function loginUserMessage(username = "Sam"){        // default values
    if(username === undefined) {            // if(!username) {}
        console.log("Please enter a username first.");
        return;
    }
    return `${username} Just logged in `
}

console.log(loginUserMessage("khushi"));

console.log(loginUserMessage());

console.log();







// ------------- + -------------- + ------------------- + -----------------



// if you don't know how many parameters will going to be there , then we will use the spread op
function calculateCartPrice(val1, val2, ...num1) {          // ...  = rest or spread operator 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));
console.log();




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

console.log(returnSecondValue(myNewArray)); 
// console.log(returnSecondValue([200, 400, 500, 1000])); 

