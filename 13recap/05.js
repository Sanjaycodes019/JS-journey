// promise

// let promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true;

//     if (success) {
//         resolve("Operation successful!"); // Fulfilled
//     } else {
//         reject("Operation failed!"); // Rejected
//     }
// });

// promise
//     .then(result => {
//         console.log(result); // "Operation successful!"
//     })
//     .catch(error => {
//         console.log(error); // "Operation failed!"
//     });



    // fetch example
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then(response => response.json()) // Convert response to JSON
    // .then(data => console.log(data)) // Print data
    // .catch(error => console.log("Error:", error)); // Handle error


    // const promiseone = new Promise(function(resolve, reject){
    //     // do an async task, cryptography, network

    //     setTimeout(() => {
    //         console.log("async task is complete!");
    //         resolve();
    //     }, 1000);
    // })

    // promiseone.then(function(){
    //     console.log("Promise consumed!");
    // })


    // new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         console.log("async task 2");
    //         resolve();
    //     }, 500);
    // }).then(()=>{
    //     console.log("async 2 resolved");
    // })


    // const promisethree = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve({username: "sanjay", email: "sanjay1621@chitkarauni.edu.in"});
    //     }, 1000);
    // })

    // promisethree.then((user)=>{
    //     console.log(user);
    // })



//     const promiseFour = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let error = false;
//             if(!error) resolve({username: "sanjay", age:21});
//             else reject('ERROR: Something went wrong');
//         }, 1000);
//     })

// promiseFour
//     .then((user)=>{
//         console.log(user);
//         return user.username;
//     })
//     .then((username)=>{
//         console.log(username);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("The promise is either resolved or rejected!");
//     })
    

//     const promiseFive = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let error = true;
//             if(!error) resolve({username: "Sneha", age:21});
//             else reject('ERROR: Sneha died!');
//         }, 1000);
//     })

//  async function consumepromisefive(){
//    try{ const response = await promiseFive;
//     console.log(response);
//  } catch (error){
//     console.log(error);
//  }
// }

//  consumepromisefive();


// async function getAllUsers() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     } catch(error){
//         console.log("Error!", error);
//     }
// } 
// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
