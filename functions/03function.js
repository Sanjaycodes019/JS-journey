//arrow function and THIS keyword

const user = {
    username: 'sanjay',
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to this site`);
         console.log(this);
    }

}

user.welcomemessage();
 user.username = 'gupta'; //contex or value changed
user.welcomemessage(); //gupta 

console.log(this);

function chai(){
    username = 'sanjay';
    console.log(this.username);
}
chai();

const chai = function() {
    let username = 'sanjay'
    console.log(this.username);
}
chai()

//_______________________________________________________________//

//arrow function
const chai = () => {
    let username = 'sanjay'
    console.log(this.username);
}
chai()


//basic syntax   () => {}

    const addtwo = ( num1 ,  num2 ) => {
        return num1 + num2;
    }

    console.log(addtwo(23, 23));

//emplicit return

const addTwo = ( num1, num2) => (num1 + num2);
console.log(addTwo(234,3423));

//const addTwo = (num1, num2) => ({username: 'sanjay'})
console.log(addTwo(2,2));


const myArray = [ 1, 2, 2, 3, 4, 2, 5, 2, 5];

myArray.forEach()

//_______________________________________________________________________________//



//immediately invoked function Expressions IIFE

 (function chai(){
    console.log(`db connected`); //parenthesis over the function body also
 })();  //and parentheseis over the last end of function
//semicolon to be used  , to end the first funcion in IIFE

 //(function defination here) (function call here)
 //to prevent from global scope pollution, IIFE is used

//how to write this in arrow function method


( (name) => {
    console.log(`this is executed in arrow function ${name}`);
}) ('sanjay')


