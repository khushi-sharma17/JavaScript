
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

console.log(Math.PI);
Math.PI = 6;
console.log(Math.PI);

// const myNewObject = Object.create(null)

const chai = {
    name : "Ginger Chai",
    price : 250,
    isAvailable : true,

    orderChai : function() {
        console.log("Not Prepared");
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// object, property, function
Object.defineProperty(chai, "name", {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}