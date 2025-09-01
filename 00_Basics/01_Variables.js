console.log("Khushi Sharma");   

const accountId = 75235;
let accountEmail = "Khushi@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";     // should not use this method of assigning a value, but this is possible
let accountState;

// accountId = 2;    // not allowed to change a constant value
accountEmail = "pri@gmail.com";
accountPassword = "Khushi";
accountCity = "nashik"

// console.log(acountId);

console.table([accountId, accountEmail, accountPassword , accountCity, accountState] )


/* 
Prefer not to use var because of issue in block and functional scope
*/

// Documentation --> tc39.es