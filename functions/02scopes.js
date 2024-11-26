// // let, var, const


// { //this is called scope
// let a = 23;
// const b = 45;
// var c = 34;
// }
// //let c =3434; //c can't be redeclared
// //console.log(a); //a is not defined in this scope, so won't be printed
// //console.log(b); //b is also not defined
// console.log(c); // this is printed? 


// //inside is block scope and outside is global scope


//______________________________________________________________________________//

//scope level and minihosting

// function one(){
//     const username = 'sanjay';
//     function two(){
//         const website = 'youtube';
//         console.log(username);
//     }
//     //console.log(website);    //cant access    
//    // two();
// }
// one();


// if (true){
//     const username = 'sanjay';
//     if (username === 'sanjay'){
//         const website = 'insta';
//         console.log(username + website)
//     }
//     // console.log(website); //can'r access
// }


//_________________________________________________________________________//

// function addOne(num){
//     return num + 1;

// }

// console.log(addOne(5));


const addtwo = function(num){  // upar se access nahi kr sakte
    return num + 2;
}
console.log(addtwo(34));

