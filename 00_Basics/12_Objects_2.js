const tinderUser = new Object();        // singleton object 
// const tinderUser = {}     // non - singleton object 

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// object in an object in an object
const regularUser = {
    email : "somename@gmail.com",
    fullname : {
        users_fullname : {
            firstName : "Khushi", 
            lastName : "Sharma"
        }
    }
}

console.log(regularUser.fullname?.users_fullname.firstName);  // here ? is for the protection, so that if fullname doesn't exist , you don't have to apply if or else condition.

// merging two objects 
const obj1 = {1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}
const obj2 = {6: "f", 7: "g"}

// const obj3 = {obj1, obj2}    // not a right method as will then it contain an object in an object 
// const obj3 = Object.assign({}, obj1, obj2);     // (target, source)   // {} = optional parameter

console.log();
const obj3 = {...obj1, ...obj2}   // spreading method 
console.log(obj3);


// array of objects
const users = [     // Data coming from a database 
    {
        id : 1, 
        email : "khushi@gmail.com"
    }, 

    {
        id : 2, 
        email : "khusbdhi@gmail.com"
    }, 

    {
        id : 3, 
        email : "khuksbsshi@gmail.com"
    }
]

console.log();

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));   // datatype returned is array 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // returns an array in array 
console.log();

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log();





// Destucturing of objects - to make the code look clean ------>>>>

const course = {
  courseName : "js in hindi ", 
  coursePrice : 1000, 
  courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor : Instr} = course 

console.log(Instr);

// we can also do destructuring of array 








 
// API's ---------->>>>>>>          

// {                               // Keys are string in JSON , and there are errors in this but there is no problem in that
//   "name" : "Khushi",
//   "courseName" : "js in hindi",
//   "price" : "free"
// }

// before values used to come in the form of XML, but now they come in the form of JSON
// API's are also present in the form of arrays like down below :
[
    {},
    {},
    {}
]


// https://api.github.com/users/hiteshchoudhary
// from randomuser me api 

// {
//     "results" = [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info" = {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
// }

// formatting in JSON formatter (Java Script Object Notation)