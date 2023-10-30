const coding = ["js", "ruby", "cpp", "Java", "Python", "C"]

// coding.forEach(  function (item) {
//     console.log(item);
// } )

coding.forEach( (item) => {
    console.log(item);
} )

// forEach using a simple function 
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);


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
})

