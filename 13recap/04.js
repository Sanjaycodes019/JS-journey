// objects
// collection of key-value pairs

let person = {
    name: "Sanjay",
    age: 21,
    isStudent: true
};

console.log(person.name); // "Sanjay"
console.log(person.age); // 21
console.log(person["name"]); // "Sanjay"

person.age = 19;
console.log(person.age); // 21

delete person.isStudent;
console.log(person); // { name: "Sanjay", age: 19, city: "Delhi" }

for (let key in person) {
    console.log(key, person[key]);
}


console.log(Object.keys(person)); // ["name", "age", "city"]
console.log(Object.values(person)); // ["Sanjay", 19, "Delhi"]
console.log(Object.entries(person)); // [["name", "Sanjay"], ["age", 19], ["city", "Delhi"]]


let student = {
    name: "Rahul",
    subjects: {
        math: 100,
        science: 85
    }
};

console.log(student.subjects.math); // 90

// array inside object
let user = {
    name: "Amit",
    hobbies: ["Reading", "Coding", "Music"]
};

console.log(user.hobbies[1]); // "Coding"


// adding a method in object
let car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
        console.log("Car started!");
    }
};

car.start(); // "Car started!"


// using this keyword
let user2 = {
    name: "Sanjay",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user2.greet(); // "Hello, my name is Sanjay"

// object destructuring
let student2 = { name: "Rahul", age: 20 };
let { name, age } = student2;
console.log(name); // "Rahul"
console.log(age); // 20


// merging two object
let objA = { a: 1, b: 2 };
let objB = { c: 3, d: 4 };
let merged = { ...objA, ...objB };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }


// converting objects to json
let person3 = { name: "Sanjay", age: 18 };
let jsonString = JSON.stringify(person3);
console.log(jsonString); // '{"name":"Sanjay","age":18}'


// converting json to object
let objFromJson = JSON.parse(jsonString);
console.log(objFromJson); // { name: "Sanjay", age: 18 }


