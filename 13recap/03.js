// array
// let arr = [1, 2, 3, 4, 5]; // Array with numbers
let names = ["Sanjay", "Rahul", "Amit"]; // Array with strings
let mixed = [10, "Hello", true, { name: "Sanjay" }]; // Mixed types

console.log(names.length);

// iterating 

// for loop
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
 

// forEach()
numbers.forEach((num) => console.log(num));


// map()
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [20, 40, 60]

// creates new array

let arr1 = [10, 20, 30, 40];
console.log(arr1.indexOf(30)); // 2
console.log(arr1.indexOf(100)); // -1 (Not Found)

console.log(arr1.includes(20)); // true
console.log(arr1.includes(100)); // false


let num = [40, 10, 5, 100];
numbers.sort(); 
console.log(num); // [10, 100, 40, 5] (Incorrect for numbers!)


let ar = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = ar.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]


// slice()
let brr = [10, 20, 30, 40, 50];
let sliced = brr.slice(1, 3);
console.log(sliced); // [20, 30]
console.log(brr); // [10, 20, 30, 40, 50] (Unchanged)


// splice()
let crr = [10, 20, 30];
crr.splice(1, 1, 25); // Removes 1 element at index 1 and adds 25
console.log(crr); // [10, 25, 30]
