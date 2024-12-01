// async code


// #javascript
// -synchronous
// -single threaded

// #execution contex
// -execute one line of code at a time


// blocking code |                  | non blocking code
// -block the flow of the program    -does't block the execution
// -read file sync                   -read file async

// Async JavaScript Demo

// Example of async with setTimeout
setTimeout(() => {
    console.log("Sanjay");
}, 2000);

// Example with setInterval
// Uncomment to see repeated output every 2 seconds
// setInterval(() => {
//     console.log("Gupta");
// }, 2000); 

// Function to change text in an h1 element
const changetext = function () {
    document.querySelector("h1").innerHTML = "Best Coding Project";
};

// Start a timer and store its ID
const changeme = setTimeout(changetext, 2000);

// Stop the timeout when the button is clicked
document.querySelector('#Stop').addEventListener('click', () => {
    clearTimeout(changeme);
    console.log("Timeout stopped!");
});
