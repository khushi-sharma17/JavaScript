var c = 300;
let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;     // c = 30;
    console.log("INNER : " , a);
}

console.log(a); 
// console.log(b); 
// console.log(c); 
console.log();

// scopes are different in browsers , i.e. their working is different 





function one() {
    const username = "khushi";

    function two() {                        // closure 
        const website = "Youtube";
        console.log(username);
    }   

    // console.log(website);

    two()
}

one()

console.log();





if(true) {
    const username = "khushi"

    if(username === "khushi") {
        const website = " Youtube ";
        console.log(username + website);
    }

    // console.log(website);        // cann't be accessed 
}

// console.log(username);

console.log();





// ------------------- interesting ---------------------------




console.log(addOne(5));         // can be accessed

function addOne(num) {          // function 
    return num + 1;
}

// addOne(5)




// console.log(addTwo(5));     // cann't be accessed like this method 

const addTwo = function(num) {          // function in expression 
    return num + 2;
}

addTwo(5);
