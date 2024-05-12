console.log("2" > 1); 
console.log("02" > 1);

console.log();

console.log(null > 0);
console.log(null >= 0);     // here the number is not inherently directly converted to 0 coz it has different syntax.
console.log(null == 0);
// comparisons convert null to a number, treating it as 0.
// but an equality check doesn't convert null to 0

console.log();

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);


console.log();

// ===  --> checks the datatype also.
console.log("2" == 2);
console.log("2" === 2);