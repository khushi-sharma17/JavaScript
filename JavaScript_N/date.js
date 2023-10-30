let myDate = new Date();
console.log("-->");
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);
console.log("<---");

let myCreatedDate = new Date(2023, 0, 24);
let myCreatedDateone = new Date("2023-01-14");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDateone.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


// ------------- + --------
console.log();
console.log();


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

console.log(`${newDate.getDay()}and the month is ${newDate.getMonth()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})