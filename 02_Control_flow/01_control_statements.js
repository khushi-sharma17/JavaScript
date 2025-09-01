// if

const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2");   // Not a good practice 



//  switch 

const month = "January";
switch(month)  {
    case "January" :
        console.log("January");
        break;

    case 2 :
        console.log("February");
        break;  

    default : 
        console.log("Default case match");
        break;
}


// falsy values =  false , 0 , -0 , BigInt 0n , "", null, undefined , NaN 

// truthy values = true, "0", "false", ' ', [], {}, function(){}

const email = "khushiastrogeek@gmail.com";

const userEmail = [];

if(userEmail.length === 0) {
    console.log("Email is empty");
}
console.log();


const emptyObj = {}

// Object.keys(emptyObj) gives an array 
if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

console.log();




// Nullish coalescing Operator (??) : null undefined 

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);


// Ternary Operator 
console.log();

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");

console.log();