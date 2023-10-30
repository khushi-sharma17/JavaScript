const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10);

// chaining 
const newNums = myNumbers.map( (num) => num*10 ).map( (num) => num + 1).filter( (num) => num >= 40)

console.log(newNums);


// reduce 

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currentValue) {
//     console.log(`accumulator : ${acc} and current value is ${currentValue}`);
//     return acc + currentValue;
// }, 0 )
// accumulate gets the return value in succession 

// console.log(myTotal);


const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0);

console.log(myTotal);



const shoppingCart = [
    {
        itemName : "JavaScript course",
        price : 2999
    }, 

    {
        itemName : "Python course",
        price : 3999
    }, 

    {
        itemName : "C++ course",
        price : 1999
    }, 

    {
        itemName : "css course",
        price : 599
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);