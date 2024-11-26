arrow function and THIS keyword

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

_______________________________________________________________//

arrow function
const chai = () => {
    let username = 'sanjay'
    console.log(this.username);
}
chai()


basic syntax   () => {}

    const addtwo = ( num1 ,  num2 ) => {
        return num1 + num2;
    }

    console.log(addtwo(23, 23));

emplicit return

const addTwo = ( num1, num2) => (num1 + num2);
console.log(addTwo(234,3423));

const addTwo = (num1, num2) => ({username: 'sanjay'})
console.log(addTwo(2,2));


const myArray = [ 1, 2, 2, 3, 4, 2, 5, 2, 5];

myArray.forEach()