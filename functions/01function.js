//creating a function

function sayMyName(){
    console.log("sanjay");
}

sayMyName();

//parameterized function

function add(num1, num2){ //parameters
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = add(2,4); //arguements

console.log("results:",result); 


function loginUserMessage(username = "sanjay"){
    if (!undefined){
        console.log("please enter your username!");
    }
     return `${username} just logged in`;
}

const message = loginUserMessage();
console.log(message);
console.log(typeof(message));

____________________________________________________//


function calculateCartPrice(num1){
return num1;
}

console.log(calculateCartPrice(3));


function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(23, 34, 43));

function calculateCartPrice(val1, val2, ...num){
    return num;
}
console.log(calculateCartPrice(23, 34, 43, 23));
output // [ 43, 23 ], val1, val2, takes the first two arguements



// passing object in function............

const user = {
    username: 'sanjay',
    age: 20
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleobject(user);


// passing array in function

const myarray = [23, 32,34, 43,35];

function returnsecondvalue(array){
    return array[1];
}
console.log(returnsecondvalue(myarray));


