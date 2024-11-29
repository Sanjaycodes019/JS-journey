// js strings

const name = "sanjay";
const age = 20;

console.log(` Hi ! My name is ${name} and i'm ${age} years old `);

console.log(name.length);

const uppercase = name.toUpperCase(); // converts the string in to uppercase, but original string remains same

console.log(uppercase);


const newString = "    sanjay gupta ";
console.log(newString);
console.log(newString.trim()); //trims the space at the beginning only
//works only on whitespace character


//working with replace 
const url = "https://ChitkaraUniveresity.com/sanjay%20gupta";
console.log(url.replace('%20', '-'));


//checking if a string or substring exists or not

console.log(url.includes("sanjay"));