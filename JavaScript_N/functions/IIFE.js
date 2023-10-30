// Immediately Invoked Function Expressions (IIFE) --->> to remove the pollution of global scope 

(function coffee() {
    // named IIFE
    console.log("DB connected ");
})();       // semicolon needed here to end the function as IIFE doesn't know where to end it 

// coffee()

((name) => {
    // unnamed IIFE with parameters 
    console.log(`DB CONNECTED ${name}`);
})("Khushi");