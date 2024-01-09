// Higher order function 

const coding = ["js", "ruby", "cpp", "Java", "Python", "C"]

// coding.forEach(  function (item) {  
//     console.log(item);
// } )

coding.forEach( (item) => {     // needs a callback function inside it         
    console.log(item);
} )
console.log();


// forEach using a simple function 
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);


// all the parameters inside for each function 
coding.forEach( (item, index, array) => {
    console.log(item, index, array);
})





// objects in Array 

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },

    {
        languageName : "Python",
        languageFileName : "py"
    },

    {
        languageName : "java",
        languageFileName : "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})

