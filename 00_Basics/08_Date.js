let myDate = new Date();
console.log("-->");
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);         // Object 
console.log("<---");
console.log();

let myCreatedDate = new Date(2023, 0, 14);
let myCreatedDateone = new Date("2024-01-14");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDateone.toLocaleString());

console.log();

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


// ------------------------ + --------------------------
console.log();
console.log();


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

console.log(`The day is ${newDate.getDay()} and the month is ${newDate.getMonth() + 1}`)

newDate.toLocaleString('default', {          // to customize locale string method more on our basis 
    weekday: "long",
    // timeZone : ""
})
