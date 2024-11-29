//objects are created through literals, and constructors

//Object.create  constructor method

//defining a symbol
// const mysym = Symbol("key1"); 

// //object literals
// const jsUser = {
//     name: "Sanjay Gupta",
//     age: 20,
//     location: "nepal",
//     email: "guptagroups09@gmail.com",
//     isLoggedIn: false,
//     [mysym]: "mykey1",
//     days: ['monday', 'saturday']
// }

// //accessing the objects
// console.log(jsUser.email);
// console.log(jsUser["email"]); //best method

// console.log(jsUser);

// Object.freeze(jsUser); //after this any element can't be modified 


//______________________________________________________________________________________________

// const tinderUser = new Object() //singelton object
// const tinderUser = {}  //non singleton object

// tinderUser.id = '123abc';
// tinderUser.name = 'sanjay';
// tinderUser.isloggedin = true;

// // console.log(tinderUser);

// const regularUser = {
//     email: "guptagroup09@gmail.com",
//     fullname : {
//         firstname : 'sanjay',
//         lastname : 'gupta'
//     }
// }

// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);


const ob1 = { 1:'a', 2:'b'};
const ob2 = { 3:'c', 4:'d'};

// const ob3 = { ob1, ob2}
// console.log(ob3);

// const obj3 = Object.assign({}, ob1 ,ob2);  // object.assign( target, source)
// console.log(obj3);  //concatenated successfully

// const obj3 = { ...ob1, ...ob2 };
// console.log(obj3); //this is the most used method in case of objects

// console.log(Object.keys(tinderuser)); // returns the key into array
// console.log(Object.values(tinderuser)); // returns values, into array

// we can later iterate or play with that array too, storing in another variable


// object destructure, json api

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }
// // 
// // const {courseInstructor} = course;
// // console.log(courseInstructor);

//  const {courseInstructor: instructor} = course; //destrucure
//  console.log(instructor);


// const navBar = () => {

// }

// navBar (company = "hitesh")


//api (apna kaam kisi aur k sar par daal dena )
//JSON
{
    "name": "sanjay",
     "age": "20"
    
}

//apis can be found in the formate of array

