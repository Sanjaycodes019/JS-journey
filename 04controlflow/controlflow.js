// control flow in js: if

// if (true) {
//     // this part will be executed
// }
// if (false){
//     // this part wont be executed
// }


// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log(`yes the user is logged in!`)
// }

// // === (checks the value and type of the value)


// const temeperature = 42;
// if (temeperature<50){
//     console.log("its not too warm!");
// }

// const score = 200;
// if (score > 100){
//     let power = 'fly';
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// short hand notation

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

// ________________________________________________________________________________//

// checking multiple conditions

// if (balance < 500){
//     console.log("greater than 500!");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else console.log("balance is greater than 1000");



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;

if (userLoggedIn && debitCard || loggedInFromGoogle){
    console.log("Allow to buy!")
}
else console.log("don't allow!");


