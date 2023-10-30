const tinderUser = new Object();        // singleton object 
// const tinderUser = {}     // non - singleton object 

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "somename@gmail.com",
    fullname : {
        users_fullname : {
            firstName : "Khushi", 
            lastName : "Sharma"
        }
    }
}

console.log(regularUser.fullname?.users_fullname.firstName);

const obj1 = {1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}
const obj2 = {6: "f", 7: "g"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);     // (target, source)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

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

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Destucturing of objects - to make the code look clean ------>>>>

const course = {
    courseName : "js in hindi ", 
    coursePrice : 1000, 
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor : Instr} = course 

console.log(Instr);


 
// API's ---------->>>>>>>          

// {                               // Keys are string in JSON 
//     "name" : "Khushi",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }

// API's are also present in the form of arrays like down below :

[
    {},
    {},
    {}
]

// https://api.github.com/users/hiteshchoudhary
// from randomuser me api 
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
}

// formatting in JSON formatter (Java Script Object Notation)