

// 1.) Works in browser only

// to take input in js

// let name = prompt("Enter your name : ");
// console.log("Hello, " + name);
// // always returns input as a string


// // convert to number if needed
// let age = prompt("Enter your age : ")
// age = Number(age)
// console.log(`You are ${age} years old.`);











// 2. In HTML Forms
// Use HTML form inputs with JavaScript event listeners.

{/* <input type="text" id="username">
<button onclick="getInput()">Submit</button>

<script>
  function getInput() {
    let user = document.getElementById("username").value;
    console.log("User:", user);
  }
</script> */}









// 3.) In Node.js (Server-side javascript)
// using readline module (built-in)


const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


rl.question("Enter your name : ", function(name) {
    console.log(`Hello, ${name}`);
    rl.close()
})






// process.stdin.on('data', (data) => {
//     console.log(`You entered : ${data.toString().trim()}`);
// })