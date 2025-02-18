// functions

function greet(name){
    return "hello, " + name + "!";
}
// console.log(greet("Sanjay"));


// Function Declaration (Named Function)
function add(a, b) {
    return a + b;
}
// console.log(add(2, 3)); 


// funtion expression
const subtract = function(a, b) {
    return a - b;
};
// console.log(subtract(5, 2)); // 3


// Arrow function
const multiply = (a, b) => a * b;
// console.log(multiply(4, 5)); // 20



// IIFE (Immediately invoked function)

(function() {
   // console.log("IIFE executed!");
})();


// higher order function

// 1: passing function as an arguement

function greet(name) {
    return "Hello, " + name;
}

function callFunction(fn, name) {
   // console.log(fn(name));
}

callFunction(greet, "Sanjay"); // Hello, Sanjay



// 2: returning a function

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
// console.log(double(5)); // 10


// default parameters
function greet(name = "Guest") {
    return "Hello, " + name;
}
// console.log(greet()); // Hello, Guest


//  reset parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3, 4)); // 10


// arguement object old way
function showArguments() {
    // console.log(arguments);
}
showArguments(1, 2, 3); // [1, 2, 3]


// function scope and closure
let globalVar = "I'm global";

function testScope() {
    let localVar = "I'm local";
   // console.log(globalVar); // ✅ Accessible
   // console.log(localVar); // ✅ Accessible
}

// console.log(globalVar); // ✅ Accessible
// console.log(localVar); // ❌ Error (not accessible)


// lexical scope
function outer() {
    let outerVar = "I'm outer";
    
    function inner() {
        // console.log(outerVar); // ✅ Can access
    }
    
    inner();
}
outer();



// closures
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3


// callbacks
function greet() {
    return "Hello";
}

// Calling function
console.log(greet()); // Hello

// Passing reference (without calling)
console.log(greet); // [Function: greet]



// callbacks (passing a function to another function)
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((message) => {
    console.log(message);
});

// function methods, call()
function greet() {
    console.log(this.name);
}

const person = { name: "Sanjay" };
greet.call(person); // Sanjay


// apply()
function introduce(city, country) {
    console.log(`I am ${this.name} from ${city}, ${country}`);
}

const user = { name: "Rahul" };
introduce.apply(user, ["Mumbai", "India"]);


// bind()
const person1 = {
    name: "Amit",
    sayHello: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

const newGreet = person1.sayHello.bind({ name: "Vikram" });
newGreet(); // Hello, I am Vikram
