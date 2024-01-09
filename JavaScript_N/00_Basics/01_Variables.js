console.log("Khushi Sharma");   

const accountId = 75235;
let accountEmail = "Khushi@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

// acountId = 2;    // not allowed 
accountEmail = "pri@gmail.com";
accountPassword = "Khushi";
accountCity = "nashik"

// console.log(acountId);

console.table([accountId, accountEmail, accountPassword , accountCity, accountState] )


/* 
Don't use var because of issue in block and function scope
*/

// Documentation --> tc39.es