// promises are mostly consumed and not that much created.
//  The promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.


/*

A Promise is in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

*/

fetch('https://something.com').then().catch().finally()     // then = response, catch = error, finally = everything

// creation of promises
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DataBase calls, cryptography = code encryption , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();      // now it's connected to then
    }, 1000)
});

promiseOne.then(function() {     // the resolve arg is connected to then function here   // .then() = gives a callback.
    console.log("Promise consumed");
});   




new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})





const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username : "Khushi", email : "khushiastrogeek@gmail.com"})
        // you can pass the data in resolve also.
    }, 1000)
});

promiseThree.then(function(user){
    console.log(user);
})




// reject gives the error 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username : "Khushi", password : "1234"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

// wrong method to get the info 
// const userName = promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })

// console.log(userName);



promiseFour                     // readability is good in this
.then((user) => {
    console.log(user);
    return user.username;
})
.then((myUserName) => {
    console.log(myUserName);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))

// catch is also needed if you give reject in the Promises
// finally will always be executed.






const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username : "JavaScript", password : "1234"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
});

// async doesn't handle errors / catch gracefully. that's why try catch block is necessary here.
async function consumePromiseFive(){    
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()






// The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');     // Right now, the data is coming in the form of a string.
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }

// getAllUsers()

// the 'response' also takes time in the above method that's why it also has to be written with await




// The same above method with then and catch method now
// thenable == chainable
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));


// Errors take time that's why the above code is executed first comparatively to others in some cases

// a special queue is made specially for the fetch (fast queue , priority queue, micro task queue, call back queue) = VIP line 
// gets added in the call stack first 



/* 
response = fetch(something)
private fields : 
data :                                      web Browser / Node 
onfulfilled[] - resolve                     network Request
onrejection[] - reject

*/


// need to again watch the fetch video to understand it. 