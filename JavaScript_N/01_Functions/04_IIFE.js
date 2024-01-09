// Immediately Invoked Function Expressions (IIFE) --->> to remove the pollution of global scope 

(function coffee() {
    // It is a named IIFE
    console.log("DB connected ");
})();       // semicolon needed here to end the function as IIFE doesn't know where to end it 

// coffee()



// arrow function
((name) => {
    // It is an unnamed IIFE with parameters 
    console.log(`DB CONNECTED ${name}`);
})("Khushi");